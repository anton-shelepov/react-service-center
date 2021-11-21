import React from 'react'
import { Field } from 'redux-form'
import { Textarea } from '../../../../FormsControls/FormsControls'
import s from './../../CreateNewOrderForm.module.scss'

export default function BreakDescription(props) {
    return (
        <div className={s.break_description}>
            <span className={s.title}>Опишите суть поломки</span>
            <span className={s.subtitle}>Для более корректного проведения ремонта, расскажите все подробности о неисправности вашего оборудования и известным вам причинам его поломки</span>
            <div className={s.text_input}>
                <Field name="break_description" placeholder="Описание поломки..." component={Textarea} />
            </div>
        </div>
    )
}
