import React, {useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCard/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({movies, saveMovie, isLoggedIn, deleteMovie, isSaved}){
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
              isSavedMovie={isSaved}
              saveMovie={saveMovie}
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
