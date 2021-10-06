import Header from "../Header/Header";
import {Link} from "react-router-dom";
function Profile(){
  return(
    <>
      <Header />
      <section className='profile'>
        <h3 className='profile__title'>Привет, Ильнура</h3>
        <div className='profile__form'>
          <p className='profile__label'>Имя</p>
          <span className='profile__span'>Ильнура</span>
        </div>
        <div className='profile__form'>
          <p className='profile__label'>E-mail</p>
          <span className='profile__span'>test@mail.com</span>
        </div>
        <p className='profile__enter-text'>Редактировать</p>
        <Link to='/' className='profile__enter-link'>Выйти из аккаунта</Link>
      </section>
    </>
)
}
export default Profile