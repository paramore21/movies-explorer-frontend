import picture from '../../images/profile_pic.jpg'
function AboutMe(){
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студентка</h2>
      <div className='about-me__container'>
        <h3 className='about-me__subtitle'>Ильнура</h3>
        <img className='about-me__img' alt='Фото студентки' src={picture} />
        <h4 className='about-me__text'>Фронтенд-разработчица, 24 года</h4>
        <p className='about-me__bio'>Родилась и живу в Ташкенте, столице Узбекистана. Закончила филиал МГУ имени М.В.Ломоносова в своем родном городе,
          по направлению "прикладная математика и информатика". Во фронтенд-разработке около года. Начинала с бесплатных курсов, затем пришла на Яндекс.Практикум. 
          На данный момент работаю фронтенд-разработчиком в местной компании по реализации товаров компьютерной техники.  
        </p>
        <ul className='about-me__social'>
          <li className='about-me__social-item'><a href='#' className='about-me__social-item-link' target='_blank'>Github</a></li>
          <li className='about-me__social-item'><a href='#' className='about-me__social-item-link' target='_blank'>LinkedIn</a></li>
        </ul>
      </div>  
    </section>
  )
}

export default AboutMe;