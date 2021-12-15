import React from 'react'
import s from './Support.module.scss'
import { Link } from 'react-router-dom'
import { CreateNewMessageForm } from '../common/ReduxForms/CreateNewMessage/CreateNewMessage'

export default function Support(props) {
    return (
        <div className={s.support}>
            <div className={s.support_title}><Link to="/"><span className={s.return}>↶</span></Link>Техническая поддержка</div>
            <div className={s.wrapper}>
                <div className={s.title}>Связь с нами</div>
                <div className={s.subtitle}>Если у вас возникли какие-либо вопросы или трудности с совершением заказа, отправьте сообщение нашим сотрудникам и вам ответят в течении 30 минут</div>
                <div className={s.messages}>
                    <div className={s.messages_wrapper}>
                        <div className={s.all_messages}></div>
                        <CreateNewMessageForm />
                    </div> 
                </div>
            </div>
        </div>
    )
}
