import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({movies, isLoggedIn, deleteMovie, savedMovies, isShort, handleSearch, handleCheckbox}){
  const [moviesArray, setMoviesArray] = useState([])
  function handleShortFilm(event){
    handleCheckbox(event)
    if(!isShort){
      setMoviesArray(movies)
    }
    else {
      setMoviesArray(movies.filter(elem => elem.duration < 40))
    }
  }
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <SearchForm handleCheckbox={handleShortFilm} isShort={isShort} searchMovies={handleSearch}/>
      <section className='movies'>
        <section className='movies__cards'>
          {savedMovies.map(elem => (
            <MoviesCardList
              movie={elem}
              key={elem.movieId}
              isSavedMovie={true}
              savedMovies={savedMovies}
              deleteMovie={deleteMovie}
            />
          ))}
        </section>
      </section>
      <Footer />
    </>
  )
}
export default SavedMovies;
