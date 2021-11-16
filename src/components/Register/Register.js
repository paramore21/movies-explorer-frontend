import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import useFormWithValidation from "../../utils/hooks/CustomHooks";

function Register({onRegister}) {
  const {values, errors, handleChange, isValid, resetForm} = useFormWithValidation({
    name: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault()
    const {email, name, password} = values
    if (isValid) {
      onRegister(email, name, password)
    }
  }
  return (
    <section className='register'>
      <img className='register__icon' alt='Логотип' src={logo}/>
      <h3 className='register__title'>Добро пожаловать!</h3>
      <form className='register__form' onSubmit={handleSubmit}>
        <label htmlFor='name' className='register__label'>Имя</label>
        <input type='text' id='name' name='name' className='register__input' value={values.name} onChange={handleChange}/>
        <span className="register__error" id="register__name__error"></span>
        <label htmlFor='email' className='register__label'>E-mail</label>
        <input type='email' id='email' name='email' className='register__input' value={values.email} onChange={handleChange}/>
        <span className="register__error" id="register__email__error"></span>
        <label htmlFor='password' className='register__label'>Пароль</label>
        <input id='password' name='password' type='password' className='register__input' value={values.password} onChange={handleChange}/>
        <span className="register__error" id="register__password__error"></span>
        <button type='submit' className='register__button'>Зарегистрироваться</button>
      </form>
      <p className='register__enter-text'>Уже зарегистрированы? <Link to='/signin' className='register__enter-link'>Войти</Link></p>
    </section>
  )
}
export default Register;
