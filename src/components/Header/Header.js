import icon from '../../images/logo.png';
function Header() {
  return (
    <section className='header'>
      <a href={'/'} className='header__link'><img className='header__icon' alt='Логотип' src={icon} /></a>
      <div className='header__buttons'>
        <a href={'/signup'} className='header__register-button'>Регистрация</a>
        <a href={'/signin'} className='header__login-button'>Войти</a>
      </div>
    </section>
  )
}

export default Header;