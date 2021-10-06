import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(){
  return (
    <>
      <Header />
      <SearchForm />
      <section className='movies'>
        <section className='movies__cards'>
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
        </section>
        <button className='movies__button' type='button'>Ещё</button>
      </section>
      <Footer />
    </>
  )
}
export default Movies;