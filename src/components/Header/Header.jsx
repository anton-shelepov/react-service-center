import classNames from 'classnames'
import React from 'react'
import s from './Header.module.scss'
import btn from './../../Styles/buttons-styles.module.scss'
import phone from './../../images/HeaderImages/phone.png'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../utils/routes/routesConsts'

export default function Header(props) { 

    let {isAuth} = props // state
    let {logout} = props // dispatches 
    
    return (
        <header className={s.header}>
            <div className={s.block__top}>
                <div className={s.wrapper}>
                    <div className={s.city}>
                        Мы находимся в городе Артем
                    </div>
                    <div className={s.info}>
                        <div className={s.phone}>
                            <img className={s.icon} src={phone} alt="" />
                            <span>8(800)555-35-35</span>
                        </div>
                        <div className={s.working_time}>(c 10:00 до 20:00)</div>
                    </div>
                </div>
            </div>
            <div className={s.block__bottom}>
                <div className={s.wrapper}>
                    <Link to="/">
                        <div className={s.logo}>
                            Сервисный центр ВГУЭС
                        </div>
                    </Link>
                    <div className={s.authorize}>
                        {
                            isAuth 
                            ? <button onClick={logout} className={classNames(btn.custom_btn, btn.btn_style, btn.btn_profile)}>Выйти из профиля</button>
                            : <Link to={LOGIN_ROUTE} className={classNames(btn.custom_btn, btn.btn_style)}>Авторизация</Link>
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    )
}
