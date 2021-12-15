import React from 'react'
import { Field } from 'redux-form' 
import { maxLengthCreator } from '../../../../../../utils/validators/validators'
import { Textarea } from '../../../../FormsControls/FormsControls'
import s from './../../CreateNewOrderForm.module.scss'

export default function BreakDescription(props) {
    return (
        <div className={s.break_description}>
            <span className={s.title}>Опишите суть поломки</span>
            <span className={s.subtitle}>Для более корректного проведения ремонта, расскажите все подробности о неисправности вашего оборудования и известным вам причинам его поломки</span>
            <div className={s.text_input}>
                <Field name="break_description" placeholder="например: Сломалась камера после падения..." validate={maxLengthCreator(15)} component={Textarea} />
            </div>
        </div>
    )
}
