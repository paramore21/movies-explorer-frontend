import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormWithValidation } from "../../utils/hooks/CustomHooks";

function Register({onRegister}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const {values, errors, isValid, handleChange} = useFormWithValidation({
      name: "",
      email: "",
      password: ""
    });
    const {email, name, password} = inputValues
    if (isValid) {
      onRegister(email, name, password)
    }
  }
  return (
    <section className='register'>
      <img className='register__icon' alt='Логотип' src={logo}/>
      <h3 className='register__title'>Добро пожаловать!</h3>
      <form className='register__form' onSubmit={handleSubmit}>
        <label for='name' className='register__label'>Имя</label>
        <input type='text' id='name' className='register__input' value={name || ""} onChange={handleNameChange}/>
        <span className="register__error" id="register__name__error"></span>
        <label for='email' className='register__label'>E-mail</label>
        <input type='email' id='email' className='register__input' value={email || ""} onChange={handleEmailChange}/>
        <span className="register__error" id="register__email__error"></span>
        <label for='password' className='register__label'>Пароль</label>
        <input id='password' type='password' className='register__input' value={password || ""} onChange={handlePasswordChange}/>
        <span className="register__error" id="register__password__error"></span>
        <button type='submit' className='register__button'>Зарегистрироваться</button>
      </form>
      <p className='register__enter-text'>Уже зарегистрированы? <Link to='/signin' className='register__enter-link'>Войти</Link></p>
    </section>
  )
}
export default Register;
