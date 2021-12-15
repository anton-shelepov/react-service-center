import React from 'react' 
import s from './../../CreateNewOrderForm.module.scss' 
import InputItem from './InputItem/InputItem'

export default function PersonalData(props) {
    return (
        <div className={s.personal_data}>
            <span className={s.title}>Введите ваши персональные данные</span>
            <span className={s.subtitle}>Убедитесь в корректности введенных вами данных, в противном случае заказ не будет оформлен</span>
            <div className={s.items}>
                <InputItem name="full_name" label="Имя" image={props.images.full_name}/> 
                <InputItem name="phone_number" label="Телефон" image={props.images.phone} />
                <InputItem name="address" label="Адрес" image={props.images.address} />
            </div>
        </div>
    )
}
