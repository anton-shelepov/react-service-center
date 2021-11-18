import React from 'react'
import s from './Home.module.scss'
import QuiestionItem from './QuestionItem/QuiestionItem'
import ServiceItem from './ServiceItem/ServiceItem'

const initialState = {
    items: {
        item1: {
            icon: "x",
            description: "Создать заказ"
        },
        item2: {
            icon: "x",
            description: "Посмотреть статус заказов"
        },
        item3: {
            icon: "x",
            description: "Редактировать личные данные"
        },
        item4: {
            icon: "x",
            description: "Техническая поддержка"
        }, 
    }
}

export default function Home() {
    return (
        <div className={s.home}>
            <div className={s.description}>
                <div className={s.title}>Что мы предлагаем</div>
                <div className={s.subtitle}>Быстрый и качественный ремонт цифрового и бытового оборудования по низкой цене с гарантией
                </div>
            </div>
            <div className={s.services_list__items}>
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>
            <div className={s.service_description}>
                <div className={s.subtitle}><p>Уже несколько тысяч довольных клиентов воспользовались нашими услугами, обращайся и ты.</p>
                    <p>Для постоянных клиентов действуют скидки и дополнительные гарантии.</p>
                </div>
            </div>
            <div className={s.questions}>
                <div className={s.questions_title}>Часто задаваемые вопросы</div>
                <div className={s.question_items}>
                    <QuiestionItem />
                    <QuiestionItem />
                    <QuiestionItem />
                </div>
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
