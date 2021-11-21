import React from 'react'
import s from './../../../CreateNewOrderForm.module.scss'

export default function About(props) {
    return (
        <div className={s.about}>
            <div className={s.title}>Подробнее</div>
            <div className={s.subtitle}>Перед совершением заказа, внимательно ознакомтесь с информацией представленной ниже</div>
            <div className={s.info}>
                <ul>
                    <li className={s.info_item}>Цена зависит от сложности, окончательная стоимость предварительно согласовывается с клиентом. </li>
                    <li className={s.info_item}>Стоимость запасных частей не входит в стоимость ремонта. </li>
                    <li className={s.info_item}>Работы по переустановке ОС производятся только при наличии у заказчика лицензионного ПО.</li>
                    <li className={s.info_item}>Стоимость диагностики в случае выполнения ремонта с клиента не взимается</li>
                </ul>
            </div>
        </div>
    )
}
