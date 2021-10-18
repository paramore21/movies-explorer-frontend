function Footer(){
  const currentYear = new Date().getFullYear()
  return(
    <section className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className='footer__nav'>
        <li className='footer__nav-year'>&copy; {currentYear}</li>
        <ul className='footer__nav-links'>
          <li className='footer__nav-links-item'>
            <a href='https://practicum.yandex.ru/' className='footer__nav-link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
          </li>
          <li className='footer__nav-links-item'>
            <a href='https://github.com/paramore21' className='footer__nav-link' target='_blank' rel='noreferrer'>Github</a>
          </li>
          <li className='footer__nav-links-item'>
            <a href='https://clck.ru/Vh526' className='footer__nav-link' target='_blank' rel='noreferrer'>LinkedIn</a>
          </li>
        </ul>
      </ul>
    </section>
  )
}
export default Footer