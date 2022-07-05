import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function MoviesCardList({movie, saveMovie, deleteMovie, isSavedMovie, savedMovies}){
  const [isSaved, setIsSaved] = useState(isSavedMovie || false)
  let {nameRU, duration} = movie
  const { pathname } = useLocation()
  const buttonText = `${pathname === '/movies' && isSaved !== true ? 'Сохранить' : ''}`

  useEffect(() => {
    checkIsSaved()
  }, [])


  function openTrailer() {
    window.open(`${movie.trailerLink}`, 'trailer');
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

  function checkIsSaved () {
    const searchMovie = savedMovies.find(item => item.movieId === movie.id)
    searchMovie ? setIsSaved(true) : setIsSaved(false)
  }

  function handleSaveMovie(){

  }
  function handleDeleteMovie(){
    deleteMovie(movie._id)
  }

  // function handleLike() {
  //   if(isLiked){
  //     const searchMovie = savedMovies.find(item => item.movieId === movie.id)
  //     handleDeleteMovie(searchMovie._id)
  //   } else {
  //     handleSaveMovie(movie)
  //   }
  //   setIsLiked(!isLiked)
  // }

  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{getDuration()}</p>
      </div>
      <a onClick={openTrailer} target='_blank'><img className='movies-card__image' src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt='Постер фильма' /></a>
      <button onClick={handleDeleteMovie} className={`${pathname === '/movies' ? isSaved ? 'movies-card__button movies-card__button_clicked' : 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList
