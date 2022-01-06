import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
function SearchForm({handleCheckbox, isShort, searchMovies}){

  function handleSearch(){
    let value = document.querySelector('.search-form__input')
    searchMovies(value.value)
    value.value = ""
  }

  return(
    <section className='search-form'>
      <div className='search-form__input-container'>
        <button className='search-form__input-icon'></button>
        <input className='search-form__input' type='text' placeholder='Фильм' name='search-form' required />
        <button className='search-form__input-button' type='submit' onClick={handleSearch}>Найти</button>
      </div>
      <FilterCheckbox handleCheckbox={handleCheckbox} checked={isShort}/>
    </section>
  )
}
export default SearchForm
