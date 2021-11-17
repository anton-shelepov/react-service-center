import React from 'react'
import s from './ServiceItem.module.scss'

export default function ServiceItem() {
    return (
        <div className={s.item}>
            <div className={s.image}>Картинка</div>
            <div className={s.description}>Описание</div>
        </div>
    )
}
