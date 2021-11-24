import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../../../../FormsControls/FormsControls'
import s from './../../CreateNewOrderForm.module.scss'

export default function AdditionalServices(props) {
    return (
        <div className={s.additional_services}>
            <span className={s.title}>Дополнительные услуги</span>
            <span className={s.subtitle}>Стоимость вывоза оборудования зависит от его габаритов, для уточнения стоимости обратитесь в техническую поддержку сервисного центра</span>
            <span className={s.subtitle}>Выберите интересующую услугу</span>
            <div className={s.items}>
                <div className={s.service_item}>
                    <div className={s.item_name}>
                        <label className={s.label} htmlFor="delivery">Доставка оборудования</label>
                    </div>
                    <Field name="delivery" id="delivery" component={Input} type="checkbox" />
                </div>
                <div className={s.service_item}>
                    <div className={s.item_name}>
                        <label className={s.label} htmlFor="master">Вызов мастера на дом</label>
                    </div>
                    <Field name="master" id="master" component={Input} type="checkbox" />
                </div>
            </div>
        </div>
    )
}
