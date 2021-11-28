import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../FormsControls/FormsControls'
import s from './AuthorizeForms.module.scss'
import btn from './../../../../Styles/buttons-styles.module.scss'
import { Link } from 'react-router-dom'

function LoginForm(props) {
    return (
        <div className={s.loginForm}>
            <form onSubmit={props.handleSubmit}>
                <Field name="login" placeholder="Логин" component={Input} />
                <Field name="password" type="password" placeholder="Пароль" component={Input} />
                <div className={s.form_buttons}>
                    <Link to="/registration">Создать новый аккаунт</Link>
                    <button className={btn.btn_style + ' ' + btn.custom_btn}> Войти </button>
                </div> 
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);