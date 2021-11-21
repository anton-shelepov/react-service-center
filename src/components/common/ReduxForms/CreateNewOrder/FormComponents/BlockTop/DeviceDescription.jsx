import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../../../../FormsControls/FormsControls'
import s from './../../CreateNewOrderForm.module.scss'

export default function DeviceDescription(props) {
    return (
        <div className={s.device_description}>
            <span className={s.title}>Введите данные оборудования</span>
            <span className={s.subtitle}>Постарайтесь как можно точнее определить информацию о неисправном устройстве</span>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.group} alt="" />
                        <label className={s.label} htmlFor="group">Группа</label>
                    </div>
                    <Field name="group" id="group" placeholder="Смартфон..." component={Input} />
                </div>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.brand} alt="" />
                        <label className={s.label} htmlFor="brand">Бренд</label>
                    </div>
                    <Field name="brand" id="brand" placeholder="Samsung..." component={Input} />
                </div>
                <div className={s.item}>
                    <div className={s.item_name}>
                        <img src={props.images.model} alt="" />
                        <label className={s.label} htmlFor="model">Модель</label>
                    </div>
                    <Field name="model" id="model" placeholder="Galaxy S21..." component={Input} />
                </div>
            </div>
        </div>
    )
}
