import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
function SearchForm({handleCheckbox, isShort}){
  return(
    <section className='search-form'>
      <div className='search-form__input-container'>
        <button className='search-form__input-icon'></button>
        <input className='search-form__input' type='text' placeholder='Фильм' name='search-form' required />
        <button className='search-form__input-button' type='submit'>Найти</button>
      </div>
      <FilterCheckbox handleCheckbox={handleCheckbox} checked={isShort}/>
    </section>
  )
}
export default SearchForm
