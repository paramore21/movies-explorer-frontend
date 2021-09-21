function SearchForm(){
  return(
    <section className='search-form'>
      <div className='search-form__input-container'>
        <p className='search-form__input-icon'></p>
        <input className='search-form__input' type='text' placeholder='Фильм' name='search-form' />
        <button className='search-form__input-button' type='submit'>Найти</button>
      </div>
    </section>
  )
}
export default SearchForm