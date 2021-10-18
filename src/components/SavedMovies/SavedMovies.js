import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(){
  return (
    <>
      <Header />
      <SearchForm />
      <section className='movies'>
        <section className='movies__cards'>
          <MoviesCardList />
          <MoviesCardList />
          <MoviesCardList />
        </section>
      </section>
      <Footer />
    </>
  )
}
export default SavedMovies;