import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({movies, isLoggedIn, deleteMovie, savedMovies}){
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <SearchForm />
      <section className='movies'>
        <section className='movies__cards'>
          {savedMovies.map(elem => (
            <MoviesCardList
              movie={elem}
              key={elem.movieId}
              isSavedMovie={true}
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
