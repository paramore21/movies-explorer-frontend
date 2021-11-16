import {useLocation} from "react-router-dom";
import {useState} from "react";

function MoviesCardList({movie}){
  let {nameRU, duration} = movie
  let image = movie.image.formats.thumbnail.url
  const { pathname } = useLocation()
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const buttonText = `${pathname === '/movies' && isButtonClicked !== true ? 'Сохранить' : ''}`
  function handleButtonClick(){
    setIsButtonClicked(!isButtonClicked)
  }
  console.log(movie)
  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{duration}</p>
      </div>
      <img className='movies-card__image' src={image} alt='Постер фильма' />
      <button onClick={handleButtonClick} className={`${pathname === '/movies' ? isButtonClicked ? 'movies-card__button movies-card__button_clicked' : 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList
