import Header from "../Header/Header";
import {Link} from "react-router-dom";
function Profile(){
  return(
    <>
      < Header/>
      <section className='profile'>
        <h3 className='profile__title'>Привет, Ильнура</h3>
        <form className='profile__form'>
          <label htmlFor='password' className='profile__label'>Имя</label>
          <input id='password' type='password' className='profile__input'/>
          <label htmlFor='email' className='profile__label'>E-mail</label>
          <input type='email' id='email' className='profile__input'/>
          <button type='submit' className='profile__button'>Войти</button>
        </form>
        <p className='profile__enter-text'>Редактировать</p>
          <Link to='/' className='profile__enter-link'>Выйти из аккаунта</Link>

      </section>
    </>
)
}
export default Profile