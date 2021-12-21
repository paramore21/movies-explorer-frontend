import { useState, useEffect, useContext } from 'react'
import UserContext from '../../Context/UserContext'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import useFormWithValidation from "../../utils/hooks/CustomHooks";
function Profile({onLogout, onUpdateUser, isLoggedIn}){
  const {email, name} = useContext(UserContext)

  const [hasChanged, setHasChanged] = useState(false)

  const {values, handleChange} = useFormWithValidation({ email, name });

  useEffect(() => {
    setHasChanged(!(values.name === name) || !(values.email === email))
  }, [values.name, values.email, name, email])


  function handleSubmit(e) {
    e.preventDefault()
    console.log(values)
    const {email, name} = values
    onUpdateUser({email, name})
  }

  return(
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <section className='profile'>
        <h3 className='profile__title'>Привет, {name}!</h3>
        <form className='profile__form' onSubmit={handleSubmit}>
          <p className='profile__label'>Имя</p>
          <input
            type='text'
            className='profile__span'
            required minLength='2'
            maxLength='200'
            onChange={handleChange}
            value={values.name}
            placeholder={name}
            name='name'
          />
          <p className='profile__label'>E-mail</p>
          <input
            type='email'
            className='profile__span'
            required
            minLength='2'
            maxLength='200'
            onChange={handleChange}
            value={values.email}
            placeholder={email}
            name='email'
          />
        </form>
      </section>
      <section className='profile__footer'>
        <button className='profile__edit-button' onClick={handleSubmit} disabled={!hasChanged}>Редактировать</button>
        <Link to='/' className='profile__enter-link' onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
)
}
export default Profile
