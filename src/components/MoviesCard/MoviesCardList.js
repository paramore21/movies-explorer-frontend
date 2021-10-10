import movie1 from '../../images/movie1.png'
import {useLocation} from "react-router-dom";
function MoviesCardList(){
  const { pathname } = useLocation()
  const buttonText = `${pathname === '/movies' ? 'Сохранить' : ''}`
  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>В погоне за Бенкси</h3>
        <p className='movies-card__duration'>27 минут</p>
      </div>
      <img className='movies-card__image' src={movie1} alt='Постер фильма' />
      <button className={`${pathname === '/movies' ? 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList