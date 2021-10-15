import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
function SearchForm(){
  return(
    <section className='search-form'>
      <div className='search-form__input-container'>
        <button className='search-form__input-icon'></button>
        <input className='search-form__input' type='text' placeholder='Фильм' name='search-form' required />
        <button className='search-form__input-button' type='submit'>Найти</button>
      </div>
      <FilterCheckbox />
    </section>
  )
}
export default SearchForm