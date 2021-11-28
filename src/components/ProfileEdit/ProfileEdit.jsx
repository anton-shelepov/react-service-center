import React from 'react'
import s from './ProfileEdit.module.scss'

export default function ProfileEdit() {
    return (
        <div className={s.profile_edit}>
            <div className={s.profile_edit__title}>Редактирование личных данных</div>
            <div className={s.content}>
                <div className={s.title}>Личные данные</div>
                <div className={s.subtitle}></div>
            </div>
        </div>
    )
}
