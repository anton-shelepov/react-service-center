import React from 'react'
import { Field } from 'redux-form'
import s from './../../CreateNewOrderForm.module.scss'
import { Input } from './../../../../FormsControls/FormsControls.js'

export default function PersonalData(props) {
    return (
        <div className={s.personal_data}>
            <span className={s.title}>Введите ваши персональные данные</span>
            <span className={s.subtitle}>Убедитесь в корректности введенных вами данных, в противном случае заказ не будет оформлен</span>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.full_name} alt="" />
                        <label className={s.label} htmlFor="full_name">ФИО</label>
                    </div>
                    <Field name="full_name" id="full_name" component={Input} />
                </div>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.phone} alt="" />
                        <label className={s.label} htmlFor="phone_number">Телефон</label>
                    </div>
                    <Field name="phone_number" id="phone_number" component={Input} />
                </div>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.address} alt="" />
                        <label className={s.label} htmlFor="address">Адрес</label>
                    </div>
                    <Field name="address" id="address" component={Input} />
                </div>
            </div>
        </div>
    )
}
