import React from 'react'
import s from './ServiceItem.module.scss'

export default function ServiceItem(props) { 
    return (
        <div className={s.item}>
            <img className={s.image} src={props.image} alt="service_image" />
            <div className={s.description}>{props.description}</div>
        </div>
    )
}
