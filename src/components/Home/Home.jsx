import React from 'react'
import s from './Home.module.scss' 
import QuestionsItems from './QuestionsItems/QuestionsItems'
import ServiceItem from './ServiceItem/ServiceItem' 

export default function Home(props) { 
    debugger
    let servicesItems = props.services.map(item => <ServiceItem image={item.service_image} description={item.description} />) 

    return (
        <div className={s.home}>
            <div className={s.description}>
                <div className={s.title}>Что мы предлагаем</div>
                <div className={s.subtitle}>Быстрый и качественный ремонт цифрового и бытового оборудования по низкой цене с гарантией
                </div>
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
                <QuestionsItems questions={props.questions}/>
            </div>
            <div className={s.support}>
                <div className={s.block_top}>
                    <div className={s.number}>8-800-555-35-35</div>
                    <div className={s.number_description}>— телефон поддержки сервисного центра ВГУЭС в г.Артем</div>
                </div>
                <div className={s.block_bottom}>
                    <div className={s.support_working_time}>(c 10:00 до 21:00)</div>
                </div>
            </div>
        </div>
    )
}
