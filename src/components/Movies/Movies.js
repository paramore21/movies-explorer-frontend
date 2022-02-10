import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import Footer from '../Footer/Footer';

function Movies({movies, isLoggedIn, saveMovie, isShort, handleSearch, loading, handleCheckbox, deleteMovie}){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [moviesArray, setMoviesArray] = useState([])

  useEffect(() => {
    if(isShort) {
      setMoviesArray(movies.filter(elem => elem.duration < 40))
    } else {
      setMoviesArray(movies.slice(0, showMoreHandler().movieCount))
    }
  }, [movies, isShort])
  function showMoreHandler() {
    if (windowWidth >= 1280) {
      return {movieCount: 12, addMore: 3}
    } else if (windowWidth >= 768) {
      return {movieCount: 8, addMore: 2}
    } else {
      return {movieCount: 5, addMore: 2}
    }
  }
  function downloadMoviesHandler () {
    setMoviesArray(
      movies.slice(0, (moviesArray.length += showMoreHandler().addMore))
    )
  }

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
      <Preloader isLoading={loading} />
      <section className='movies'>
        <section className='movies__cards'>
          {moviesArray.map((elem) => (
            <MoviesCardList
              movie={elem}
              key={elem.id}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
            />
          ))}
        </section>
        <button className='movies__button' type='button' onClick={downloadMoviesHandler}>Ещё</button>
      </section>
      <Footer />
    </>
  )
}
export default Movies;
