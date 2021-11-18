import React from 'react'
import s from './QuestionItem.module.scss'

export default function QuiestionItem() {
    return (
        <div className={s.item}>
            <span className={s.name}>Что делать если нет возможности привезти технику в сервисный центр ?</span>
            <i className={s.icon}>x</i>
        </div>
    )
}
