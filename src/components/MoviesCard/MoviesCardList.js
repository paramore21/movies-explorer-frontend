import {useLocation} from "react-router-dom";
import {useState} from "react";

function MoviesCardList({movie, isSavedMovie, saveMovie}){
  let {nameRU, duration} = movie
  const { pathname } = useLocation()
  const [isSaved, setIsSaved] = useState(isSavedMovie)
  const buttonText = `${pathname === '/movies' && isSaved !== true ? 'Сохранить' : ''}`

  function handleButtonClick(){
    setIsSaved(!isSaved)
  }

  function getDuration() {
    let hours = Math.floor(+duration / 60)
    let minutes = +duration % 60
    return `${hours}ч ${minutes}м`
  }
  getDuration()

  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{getDuration()}</p>
      </div>
      <img className='movies-card__image' src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt='Постер фильма' />
      <button onClick={handleButtonClick} className={`${pathname === '/movies' ? isSaved ? 'movies-card__button movies-card__button_clicked' : 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList
