import React from 'react' 
import s from './../../CreateNewOrderForm.module.scss'
import InputItem from './InputItem/InputItem'

export default function DeviceDescription(props) { 
    return (
        <div className={s.device_description}>
            <span className={s.title}>Введите данные оборудования</span>
            <span className={s.subtitle}>Постарайтесь как можно точнее определить информацию о неисправном устройстве</span>
            <div className={s.items}>
               <InputItem name="group" placeholder="Смартфон..." label="Группа" image={props.images.group} />
               <InputItem name="brand" placeholder="Samsung..." label="Бренд" image={props.images.brand} />
               <InputItem name="model" placeholder="Galaxy S21..." label="Модель" image={props.images.model} /> 
            </div>
        </div>
    )
}
