import icon from '../../images/href_icon.svg';
function Portfolio(){
  return (
    <section className='portfolio'>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a href='#' target='_blank' className='portfolio__link'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <svg className='portfolio__link-icon' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
            </svg>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='#' target='_blank' className='portfolio__link'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <svg className='portfolio__link-icon' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
            </svg>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='#' target='_blank' className='portfolio__link'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <svg className='portfolio__link-icon' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
            </svg>
          </a>
        </li>
      </ul>      
    </section>
  )
}
export default Portfolio;