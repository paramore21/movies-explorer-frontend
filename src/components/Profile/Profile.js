import React, { useState } from "react"
import { UserContext } from "../../Context/UserContext"
import Header from "../Header/Header";
import {Link} from "react-router-dom";
function Profile({onLogout, onUpdateUser}){
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
    onUpdateUser({name, email})
  }

  return(
    <>
      <Header />
      <section className='profile'>
        <h3 className='profile__title'>Привет, {name}!</h3>
        <form className='profile__form' onSubmit={handleSubmit}>
          <p className='profile__label'>Имя</p>
          <input type='text' className='profile__span' required minLength='2' maxLength='200' value={name || ""} placeholder='Имя' onChange={handleNameChange}/>
          <p className='profile__label'>E-mail</p>
          <input type='email' className='profile__span' required minLength='2' maxLength='200' value={email || ""} placeholder='E-mail' onChange={handleEmailChange}/>
        </form>
      </section>
      <section className='profile__footer'>
        <p className='profile__enter-text'>Редактировать</p>
        <Link to='/' className='profile__enter-link' onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
)
}
export default Profile
