import icon from '../../images/logo.svg';
import close_icon from '../../images/close-icon.svg';
import burger_icon from '../../images/burger-icon.svg';
import {useLocation} from "react-router-dom";
import {useState} from "react";
function Header({isLoggedIn}) {
  const { pathname } = useLocation()
  const buttonText = `${isLoggedIn ? 'Войти' : 'Аккаунт'}`
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function handleMenuOpen(){
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <section className={`${pathname === '/' ? 'header' : 'header header_light'}`}>
        <section className={`${pathname === '/' ? 'header__display-landing' : 'header__display-row'}`}>
          <div className='header__films'>
            <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
            <a href={'/movies'} className={`${pathname === '/' ? 'header__films-no-display' : 'header__movie_bold'}`}>Фильмы</a>
            <a href={'/saved-movies'} className={`${pathname === '/' ? 'header__films-no-display' : 'header__movie_light'}`}>Сохраненные фильмы</a>
          </div>
          <div className={isLoggedIn ? 'header__display-none' : 'header__buttons'}>
            <a href={'/signup'} className={`${pathname === '/' ? 'header__register-button' : 'header__register-button header__register-button_light'}`}>Регистрация</a>
            <a href={pathname === '/'? '/signin' : '/profile'} className={`${pathname === '/' ? 'header__login-button' : 'header__login-button header__login-button_light'}`}>{buttonText}</a>
          </div>

          <div className={!isLoggedIn ? 'header__display-none' : 'header__buttons'}>
            <a href='/profile' className='header__login-button header__login-button_bg-light'>Акканут</a>
          </div>

        </section>
        <section className={`${pathname === '/' ? "header__display-none" : "header__burger"}`}>
          <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
          <p className='header__link' onClick={handleMenuOpen}><img className='header__icon' alt='Логотип' src={burger_icon} /></p>
          <div className={isMenuOpen ? "header__burger-menu header__burger-menu_opened" : "header__burger-menu"}>
            <ul className="header__burger-box">
              <li className='header__burger-close-icon' onClick={handleMenuOpen}><img src={close_icon} alt='Закрыть' className="header__close-icon"/></li>
              <ul className='header__burger-sub-box'>
                <li className='header__burger-item'><a className={ pathname === '/' ? "header__burger-link header__burger-link_active" : "header__burger-link"} href={'/'}>Главная</a></li>
                <li className='header__burger-item'><a className={ pathname === '/movies' ? "header__burger-link header__burger-link_active" : "header__burger-link"} href={'/movies'}>Фильмы</a></li>
                <li className='header__burger-item'><a className={ pathname === '/saved-movies' ? "header__burger-link header__burger-link_active" : "header__burger-link"} href={'/saved-movies'}>Сохраненные фильмы</a></li>
                <li className='header__burger-item'><a href={'/profile'} className='header__burger-account-button'>Аккаунт</a></li>
              </ul>
            </ul>
          </div>
        </section>
      </section>
    </>
  )
}

export default Header;
