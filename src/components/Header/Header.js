import icon from '../../images/logo.png';
import {useLocation} from "react-router-dom";
function Header() {
  const {path} = useLocation()
  const buttonText = `${path === '/' ? 'Войти' : 'Аккаунт'}`
  return (
    <section className={`${path === '/' ? 'header' : 'header header_light'}`}>
      <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
      <div className='header__buttons'>
        <a href={'/signup'} className={`${path === '/' ? 'header__register-button' : 'header__register-button header__register-button_light'}`}>Регистрация</a>
        <a href={'/signin'} className={`${path === '/' ? 'header__login-button' : 'header__login-button header__login-button_light'}`}>{buttonText}</a>
      </div>
    </section>
  )
}

export default Header;