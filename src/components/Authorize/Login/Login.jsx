import React from 'react'
import { LoginReduxForm } from '../../common/ReduxForms/AuthorizeForms/LoginForm'

import s from './../Authorize.module.scss'

export default function Login() {
    return (
        <div className={s.login}>
            <div className={s.wrapper}>
                <div className={s.title}>Авторизация</div> 
                <LoginReduxForm /> 
            </div>
        </div>
    )
}
