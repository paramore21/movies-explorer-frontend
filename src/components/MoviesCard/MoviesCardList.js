import {useLocation} from "react-router-dom";
import {useState} from "react";

function MoviesCardList({movie, isSavedMovie, saveMovie, deleteMovie}){
  let {nameRU, duration} = movie
  const { pathname } = useLocation()
  const [isSaved, setIsSaved] = useState(isSavedMovie)
  const buttonText = `${pathname === '/movies' && isSaved !== true ? 'Сохранить' : ''}`

  function handleButtonClick(movie){
    let movieToSave = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      owner: 1,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }
    if(isSaved){
      saveMovie(movieToSave)
    } else {
      deleteMovie(movie.id)
    }
    setIsSaved(!isSaved)
  }

  function getDuration() {
    let hours = Math.floor(+duration / 60)
    let minutes = +duration % 60
    if(hours === 0) {
      return `${minutes} м`
    } else {
      return `${hours}ч ${minutes}м`
    }
  }

  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{getDuration()}</p>
      </div>
      <a href={movie.trailerLink} target='_blank'><img className='movies-card__image' src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt='Постер фильма' /></a>
      <button onClick={() => handleButtonClick(movie)} className={`${pathname === '/movies' ? isSaved ? 'movies-card__button movies-card__button_clicked' : 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList
