import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({movies, saveMovie, isLoggedIn}){
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <SearchForm />
      <section className='movies'>
        <section className='movies__cards'>
          {movies.map(elem => (
            <MoviesCardList
              movie={elem}
              key={elem.movieId}
              isSavedMovie={true}
              saveMovie={saveMovie}
            />
          ))}
        </section>
      </section>
      <Footer />
    </>
  )
}
export default SavedMovies;
