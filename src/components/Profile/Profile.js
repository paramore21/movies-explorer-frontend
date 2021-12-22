import { useState, useEffect, useContext, useRef } from 'react'
import UserContext from '../../Context/UserContext'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import useFormWithValidation from "../../utils/hooks/CustomHooks";
function Profile({onLogout, onUpdateUser, isLoggedIn}){
  const { email, name } = useContext(UserContext);
  const newName = useRef("")
  const newEmail = useRef("")

  const { values, handleChange } = useFormWithValidation({
    email: newEmail.current.value,
    name: newName.current.value
  });
  const [hasChanges, setHasChanges] = useState(true);

  useEffect(() => {
    setHasChanges(newEmail.current.value === name && newName.current.value === email);
  }, [values.name, values.email, name, email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      email: newEmail.current.value,
      name: newName.current.value
    }
    onUpdateUser(data);
  };

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
            defaultValue={name}
            placeholder={name}
            name='name'
            ref={newName}
          />
          <p className='profile__label'>E-mail</p>
          <input
            type='email'
            className='profile__span'
            required
            minLength='2'
            maxLength='200'
            onChange={handleChange}
            placeholder={email}
            defaultValue={email}
            name='email'
            ref={newEmail}
          />
        </form>
      </section>
      <section className='profile__footer'>
        <button className='profile__edit-button' onClick={handleSubmit} disabled={hasChanges}>Редактировать</button>
        <Link to='/' className='profile__enter-link' onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
)
}
export default Profile
