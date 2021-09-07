function Register() {
  return (
    <>
        <section className='register'>
          {/* <img className='register__icon' /> */}
          <h3 className='register__title'>Добро пожаловать</h3>
          <form className='register__form'>
            <label for='name'>Имя</label>
            <input type='text' id='name' />
            <label for='email'>E-mail</label>
            <input type='email' id='email' />
            <label for='password'>Пароль</label>
            <input id='password' type='password' />
            <button type='submit'>Зарегистрироваться</button>
          </form>
          <p>Уже зарегестрированы? <a href='#'>Войти</a></p>
        </section>
    </>
  )
}
export default Register