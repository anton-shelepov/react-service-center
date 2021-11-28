import React from 'react'
import s from './OrdersCards.module.scss'

export default function OrdersCards(props) {
    return (
        <>
            {props.orders.map(item => (
                <div className={s.card}>
                    <div className={s.block__top}>
                        <div className={s.device_name}>{item.device_name}</div>
                        <div className={s.order_info}>
                            <div className={s.status}>Статус: {item.status}</div> 
                        </div>
                    </div>
                    <div className={s.block__bottom}>
                        <div className={s.break_description}>{item.break_description}</div> 
                        <div className={s.date}>{item.date}</div>
                    </div> 
                </div>
            ))}

        </>
    )
}
