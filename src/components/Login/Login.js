import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/logo.png";
import {useState} from "react";

function Login({onLogin}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onLogin(email, password)
  }
  return (
    <section className='login'>
      <a href={'/'} className='login__icon'><img alt='Логотип' src={icon} /></a>
      <h3 className='login__title'>Рады видеть!</h3>
      <form className='login__form' onSubmit={handleSubmit}>
        <label for='email' className='login__label'>E-mail</label>
        <input type='email' id='email' className='login__input' onChange={handleEmailChange} value={email || ""}/>
        <span className="login__error" id="login__email__error"></span>
        <label for='password' className='login__label'>Пароль</label>
        <input id='password' type='password' className='login__input' onChange={handlePasswordChange} value={password || ""}/>
        <span className="login__error" id="login__password__error"></span>
        <button type='submit' className='login__button'>Войти</button>
      </form>
      <p className='login__enter-text'>Ещё не зарегестрированы? <Link to='/signup' className='login__enter-link'>Регистрация</Link></p>
    </section>
  )
}
export default Login