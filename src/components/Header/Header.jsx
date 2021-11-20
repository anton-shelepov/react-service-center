import classNames from 'classnames'
import React from 'react'
import s from './Header.module.scss'

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.block__top}>
                <div className={s.wrapper}>
                    <div className={s.city}>
                        Мы находимся в городе Артем
                    </div>
                    <div className={s.info}>
                        <div className={s.phone}>
                            <img rel="phone" href="./images/" />
                            <span>8(800)555-35-35</span>
                        </div>
                        <div className={s.woriking_time}>(c 10:00 до 20:00)</div>
                    </div>
                </div>
            </div>
            <div className={s.block__bottom}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        Сервисный центр ВГУЭС
                    </div>
                    <div className={s.authorize}>
                        <button className={classNames(s.custom_btn, s.btn_style)}>Войти</button>
                        <button className={classNames(s.custom_btn, s.btn_style)}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
