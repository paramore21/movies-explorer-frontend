import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/logo.png";
function Login() {
  return (
    <section className='login'>
      <a href={'/'} className='login__icon'><img alt='Логотип' src={icon} /></a>
      <h3 className='login__title'>Рады видеть!</h3>
      <form className='login__form'>
        <label for='email' className='login__label'>E-mail</label>
        <input type='email' id='email' className='login__input' />
        <label for='password' className='login__label'>Пароль</label>
        <input id='password' type='password' className='login__input' />
        <button type='submit' className='login__button'>Войти</button>
      </form>
      <p className='login__enter-text'>Ещё не зарегестрированы? <Link to='/signup' className='login__enter-link'>Регистрация</Link></p>
    </section>
  )
}
export default Login