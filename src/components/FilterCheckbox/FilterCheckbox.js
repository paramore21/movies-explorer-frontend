function FilterCheckbox({isShort, handleCheckbox}) {
  return(
    <section className='filter-checkbox'>
      <label className='filter-checkbox__label' htmlFor='shortfilm' >
        <input type='checkbox' className='filter-checkbox__input' id='shortfilm' onChange={handleCheckbox} checked={isShort}/>
        <span className='filter-checkbox__round' />
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </section>
  )
}
export default FilterCheckbox
