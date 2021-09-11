function Footer(){
  const currentYear = new Date().getFullYear()
  return(
    <section className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className='footer__nav'>
        <li className='footer__nav-year'>&copy; {currentYear}</li>
        <ul className='footer__nav-links'>
          <li className='footer__nav-links-item'>
            <a href='#' className='footer__nav-link' target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__nav-links-item'>
            <a href='#' className='footer__nav-link' target='_blank'>Github</a>
          </li>
          <li className='footer__nav-links-item'>
            <a href='#' className='footer__nav-link' target='_blank'>LinkedIn</a>
          </li>
        </ul>
      </ul>
    </section>
  )
}
export default Footer