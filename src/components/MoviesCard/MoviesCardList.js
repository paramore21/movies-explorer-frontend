import movie1 from '../../images/movie1.png'
import {useLocation} from "react-router-dom";
import {useState} from "react";

function MoviesCardList(){
  const { pathname } = useLocation()
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const buttonText = `${pathname === '/movies' && isButtonClicked !== true ? 'Сохранить' : ''}`
  function handleButtonClick(){
    setIsButtonClicked(!isButtonClicked)
  }
  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>В погоне за Бенкси</h3>
        <p className='movies-card__duration'>27 минут</p>
      </div>
      <img className='movies-card__image' src={movie1} alt='Постер фильма' />
      <button onClick={handleButtonClick} className={`${pathname === '/movies' ? isButtonClicked ? 'movies-card__button movies-card__button_clicked' : 'movies-card__button' : 'saved-movies-card__button'}`}>{buttonText}</button>
    </section>
  )
}
export default MoviesCardList