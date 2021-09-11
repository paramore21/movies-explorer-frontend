import icon from '../../images/logo.png';
function Header() {
  return (
    <section className='header'>
      <img className='header__icon' alt='Логотип' src={icon} />
      <div className='header__buttons'>
        <button type='button' className='header__register-button'>Регистрация</button>
        <button type='button' className='header__login-button'>Войти</button>
      </div>
    </section>
  )
}

export default Header;