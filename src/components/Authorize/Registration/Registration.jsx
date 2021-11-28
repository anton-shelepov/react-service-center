import React from 'react'
import { RegistrationReduxForm } from '../../common/ReduxForms/AuthorizeForms/RegistrationForm'

import s from './../Authorize.module.scss'

export default function Registration() {
    return (
        <div className={s.registration}>
            <div className={s.wrapper}>
                <div className={s.title}>Регистрация</div> 
                <RegistrationReduxForm /> 
            </div>
        </div>
    )
}
