import movie1 from '../../images/movie1.png'
function MoviesCardList(){
  return (
    <section className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>В погоне за Бенкси</h3>
        <p className='movies-card__duration'>27 минут</p>
      </div>
      <img className='movies-card__image' src={movie1} alt='Постер фильма' />
      <button className='movies-card__button'>Сохранить</button>
    </section>
  )
}
export default MoviesCardList