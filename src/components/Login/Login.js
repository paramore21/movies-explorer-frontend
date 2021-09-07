function Login() {
  return (
    <>
        <section className='login'>
          {/* <img className='login__icon' /> */}
          <h3 className='login__title'>Рады видеть</h3>
          <form className='login__form'>
            <label for='email'>E-mail</label>
            <input type='email' id='email' />
            <label for='password'>Пароль</label>
            <input id='password' type='password' />
            <button type='submit'>Войти</button>
          </form>
          <p>Ещё не зарегестрированы? <a href='asd'>Регистрация</a></p>
        </section>
    </>
  )
}
export default Login