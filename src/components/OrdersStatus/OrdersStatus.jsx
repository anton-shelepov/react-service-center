import React from 'react'
import OrdersCards from './OrdersCards/OrdersCards'
import s from './OrdersStatus.module.scss'
import btn from './../../Styles/buttons-styles.module.scss'

export default function OrdersStatus(props) {
    return (
        <div className={s.orders_wrapper}>
            <div className={s.title}>Статус заказов</div>
            <div className={s.content}>
                <div className={s.content_title}>Ваши заказы</div>
                <div className={s.content_subtitle}>Как только ремонт будет полностью произведен, статус заказа изменится на "Готов" и вам придет СМС оповещение о готовности заказа</div>
                <div className={s.orders_items}>
                    <OrdersCards orders={props.orders} />
                </div>
                <div className={s.new_order}>
                    <button className={btn.btn_style + ' ' + btn.custom_btn + ' ' + btn.btn_submit}>Создать новый заказ</button>
                </div>
            </div>
        </div>
    )
}
