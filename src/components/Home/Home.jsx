import React from 'react'
import s from './Home.module.scss'
import ServiceItem from './ServiceItem/ServiceItem'

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
            <div className={s.questions}>
                
            </div>
        </div>
    )
}
