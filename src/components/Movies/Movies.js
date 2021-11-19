import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({movies}){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [moviesArray, setMoviesArray] = useState([])
  const [isShort, setIsShort] = useState(false)

  useEffect(() => {
    setMoviesArray(movies.slice(0, showMoreHandler().movieCount))
  }, [movies])
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

  function handleShortFilm(){
    if(isShort){
      setMoviesArray(movies)
      setIsShort(false)
    }
    else {
      setMoviesArray(movies.filter(elem => elem.duration < 40))
      setIsShort(true)
    }
  }
  return (
    <>
      <Header />
      <SearchForm chooseShortFilm={handleShortFilm}/>
      <section className='movies'>
        <section className='movies__cards'>
          {moviesArray.map((elem) => (
            <MoviesCardList
              movie={elem}
              key={elem.id}
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
