import icon from '../../images/logo.png';
import {useLocation} from "react-router-dom";
function Header() {
  const { pathname } = useLocation()
  const buttonText = `${pathname === '/' ? 'Войти' : 'Аккаунт'}`
  return (
    <section className={`${pathname === '/' ? 'header' : 'header header_light'}`}>
      <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
      <div className='header__buttons'>
        <a href={'/signup'} className={`${pathname === '/' ? 'header__register-button' : 'header__register-button header__register-button_light'}`}>Регистрация</a>
        <a href={'/signin'} className={`${pathname === '/' ? 'header__login-button' : 'header__login-button header__login-button_light'}`}>{buttonText}</a>
      </div>
    </section>
  )
}

export default Header;