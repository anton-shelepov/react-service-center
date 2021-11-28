import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../FormsControls/FormsControls'
import s from './AuthorizeForms.module.scss'
import btn from './../../../../Styles/buttons-styles.module.scss'
import { Link } from 'react-router-dom'

function RegistrationForm(props) {
    return (
        <div className={s.registrationForm}>
            <form onSubmit={props.handleSubmit}>
                <Field name="email" placeholder="E-mail" component={Input} />
                <Field name="login" placeholder="Логин" component={Input} />
                <Field name="password" type="password" placeholder="Введите пароль" component={Input} />
                <Field name="password" type="password" placeholder="Введите пароль еще раз" component={Input} /> 
                <div className={s.form_buttons}>
                    <Link to="/login">Вернуться</Link>
                    <button className={btn.btn_style + ' ' + btn.custom_btn}> Зарегистрироваться </button>
                </div>
            </form>
        </div>
    )
}

export const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm);