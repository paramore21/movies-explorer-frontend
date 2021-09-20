import logo from '../../images/landing-logo.svg';
function Promo (){
  return (
    <section className='promo'>
      <h3 className='promo__title'>Учебный проект
      студента факультета Веб-разработки.</h3>
      <img className='promo__logo' src={logo} alt='Логотип проекта'/>
    </section>
  )
}
export default Promo