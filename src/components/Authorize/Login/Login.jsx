import React from 'react'
import { useNavigate } from 'react-router'
import { LoginReduxForm } from '../../common/ReduxForms/AuthorizeForms/LoginForm'

import s from './../Authorize.module.scss'

export default function Login(props) {

    const {setAuthData} = props

    let navigate = useNavigate()

    const onSubmit = (formData) => { 
        setAuthData(formData.login, formData.password) 
        navigate("/")
    }

    return (
        <div className={s.login}>
            <div className={s.wrapper}>
                <div className={s.title}>Авторизация</div> 
                <LoginReduxForm onSubmit={onSubmit}/> 
            </div>
        </div>
    )
}
