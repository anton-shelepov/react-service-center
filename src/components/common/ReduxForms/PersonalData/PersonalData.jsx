import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../FormsControls/FormsControls'
import s from './PersonalData.module.scss'
import btn from './../../../../Styles/buttons-styles.module.scss' 
import { required } from '../../../../utils/validators/validators'

function PersonalData(props) {
    return (
        <div className={s.personal_data}>
            <form onSubmit={props.handleSubmit}>
                <div className={s.items}>
                    <div className={s.item}>
                        <div className={s.input_name}>
                            <label className={s.input_name} htmlFor="email">E-mail</label>
                        </div>
                        <div className={s.input}>
                            <Field name="email" id="email" placeholder="E-mail" component={Input} validate={required} />
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.input_name}>
                            <label className={s.input_name} htmlFor="login">Логин</label>
                        </div>
                        <div className={s.input}>
                            <Field name="login" id="login" placeholder="Логин" component={Input} validate={required} />
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.input_name}>
                            <label className={s.input_name} htmlFor="password">Ваш старый пароль</label>
                        </div>
                        <div className={s.input}>
                            <Field name="password" id="password" type="password" placeholder="Введите старый пароль" component={Input} validate={required} />
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.input_name}>
                            <label className={s.input_name} htmlFor="new_password">Ваш новый пароль</label>
                        </div>
                        <div className={s.input}>
                            <Field name="new_password" id="new_password" type="password" placeholder="Введите новый пароль" component={Input} validate={required} />
                        </div>
                    </div>

                </div>
                <div className={s.form_buttons}>
                    <button className={btn.btn_style + ' ' + btn.custom_btn + ' ' + btn.btn_submit}> Сохранить изменения </button>
                </div>
            </form>
        </div>
    )
}

export const PersonalDataReduxForm = reduxForm({ form: 'personal_data' })(PersonalData);