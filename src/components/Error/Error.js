function Error() {
    return(
        <section className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__subtitle'>Страница не найдена</h2>
            <a href={'/'} className='error__go-back'>Назад</a>
        </section>
    )
}
export default Error