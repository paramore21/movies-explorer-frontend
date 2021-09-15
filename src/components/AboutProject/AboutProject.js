function AboutProject(){
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>  
      <ul className='about-project__progress'>
        <li className='about-project__progress-item about-project__progress-item_green'>1 неделя</li>
        <li className='about-project__progress-item about-project__progress-item_sign'>Back-end</li>
        <li className='about-project__progress-item about-project__progress-item_gray'>4 недели</li>
        <li className='about-project__progress-item about-project__progress-item_sign'>Front-end</li>
      </ul>
    </section>
  )
}

export default AboutProject;