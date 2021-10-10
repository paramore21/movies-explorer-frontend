import icon from '../../images/logo.png';
import burger_icon from '../../images/burger-icon.svg';
import close_icon from '../../images/cancel-icon.svg';
import {useLocation} from "react-router-dom";
import {useState} from "react";
function Header() {
  const { pathname } = useLocation()
  const buttonText = `${pathname === '/' ? 'Войти' : 'Аккаунт'}`
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function handleMenuOpen(){
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <section className={`${pathname === '/' ? 'header' : 'header header_light'}`}>
        <div className='header__films'>
          <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
          <a href={'/movies'} className={`${pathname === '/' ? 'header__films-no-display' : 'header__movie_bold'}`}>Фильмы</a>
          <a href={'/saved-movies'} className={`${pathname === '/' ? 'header__films-no-display' : 'header__movie_light'}`}>Сохраненные фильмы</a>
        </div>
        <div className='header__buttons'>
          <a href={'/signup'} className={`${pathname === '/' ? 'header__register-button' : 'header__register-button header__register-button_light'}`}>Регистрация</a>
          <a href={'/signin'} className={`${pathname === '/' ? 'header__login-button' : 'header__login-button header__login-button_light'}`}>{buttonText}</a>
        </div>
      </section>
      <section className='header__burger'>
        <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
        <p className='header__link' onClick={handleMenuOpen}><img className='header__icon' alt='Логотип' src={burger_icon} /></p>
        <div className={isMenuOpen ? "header__burger-menu header__burger-menu_opened" : "header__burger-menu"}>
          <ul className="header__burger-box">
            <li className='header__burger-item' onClick={handleMenuOpen}><img src={close_icon} alt='Закрыть' className="header__close-icon"/></li>
            <li className='header__burger-item'><a className="header__burger-link" href={'/'}>Главная</a></li>
            <li className='header__burger-item'><a className="header__burger-link" href={'/movies'}>Фильмы</a></li>
            <li className='header__burger-item'><a className="header__burger-link" href={'/saved-movies'}>Сохраненные фильмы</a></li>
            <li className='header__burger-item'><a href={'/signin'} className='header__login-button header__login-button_light'>Аккаунт</a></li>
          </ul>
        </div>
      </section>
  </>
  )
}

export default Header;