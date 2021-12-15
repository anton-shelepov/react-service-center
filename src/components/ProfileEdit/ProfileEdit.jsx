import React from 'react'
import { Link } from 'react-router-dom'
import { PersonalDataReduxForm } from '../common/ReduxForms/PersonalData/PersonalData'
import s from './ProfileEdit.module.scss'

export default function ProfileEdit() {
    return (
        <div className={s.profile_edit}>
            <div className={s.profile_edit__title}><Link to="/"><span className={s.return}>↶</span></Link>Редактирование личных данных</div>
            <div className={s.content}>
                <div className={s.title}>Личные данные</div>
                <div className={s.subtitle}>Обратите внимание на правильность изменяемых данных, так как последующий вход в аккаунт будет производиться благодаря им. Если у вас возникли трудности, обратитесь в техническую поддержку с вашим вопросом</div>
                <PersonalDataReduxForm />
            </div>
        </div>
    )
}
