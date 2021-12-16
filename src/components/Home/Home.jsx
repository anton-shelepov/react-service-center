import React from 'react'
import s from './Home.module.scss'
import QuestionItem from './QuestionsItems/QuestionItem' 
import ServiceItem from './ServiceItem/ServiceItem'

export default function Home(props) {

    let servicesItems = props.services.map(item => <ServiceItem key={item.link} image={item.service_image} description={item.description} link={item.link} />)
    let questionsItems = props.questions.map(item => <QuestionItem key={item.title} question={item} />)


    return (
        <div className={s.home}>
            <div className={s.description}>
                <div className={s.title}>Что мы предлагаем</div>
                <div className={s.subtitle}>Быстрый и качественный ремонт цифрового и бытового оборудования по низкой цене с гарантией</div>
            </div>
            <div className={s.services_list__items}>
                {servicesItems}
            </div>
            <div className={s.service_description}>
                <div className={s.description_title}><p>Уже несколько тысяч довольных клиентов воспользовались нашими услугами, обращайся и ты.</p>
                    <p>Для постоянных клиентов действуют скидки и дополнительные гарантии.</p>
                </div>
            </div>
            <div className={s.questions}>
                <div className={s.questions_title}>Часто задаваемые вопросы</div>
                <div className={s.questions_items}>
                    {questionsItems}
                </div>
            </div>
        </div>
    )
}
