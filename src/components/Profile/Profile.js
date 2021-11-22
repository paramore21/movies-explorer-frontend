import React, { useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
function Profile({onLogout, onUpdateUser, isLoggedIn}){
  const currentUser = React.useContext(UserContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  React.useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [currentUser])

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser(email, name)
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
            value={name || ''}
            placeholder='Имя'
            onChange={handleNameChange}
            name='name'
          />
          <p className='profile__label'>E-mail</p>
          <input
            type='email'
            className='profile__span'
            required
            minLength='2'
            maxLength='200'
            value={email || ''}
            placeholder='E-mail'
            onChange={handleEmailChange}
            name='email'
          />
        </form>
      </section>
      <section className='profile__footer'>
        <button className='profile__edit-button' onClick={handleSubmit}>Редактировать</button>
        <Link to='/' className='profile__enter-link' onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
)
}
export default Profile
