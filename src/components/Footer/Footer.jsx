import s from './Footer.module.scss'
import React from 'react'

export default function Footer() {
    return (
        <div className={s.support}>
            <div className={s.block_top}>
                <span className={s.number}>8-800-555-35-35</span>
                <span className={s.number_description}>— телефон поддержки сервисного центра ВГУЭС в г.Артем</span>
            </div>
            <div className={s.block_bottom}>
                <span className={s.support_working_time}>(c 10:00 до 21:00)</span>
            </div>
        </div>
    )
}


