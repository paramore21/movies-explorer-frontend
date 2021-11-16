import React, {useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({movies}){
  function click() {
    console.log(movies)
  }
  return (
    <>
      <Header />
      <SearchForm />
      <section className='movies'>
        <section className='movies__cards'>
          {movies.slice(2, 4).map((elem) => (
            <MoviesCardList
              movie={elem}
            />
          ))}
        </section>
        <button className='movies__button' type='button'>Ещё</button>
      </section>
      <Footer />
    </>
  )
}
export default Movies;
