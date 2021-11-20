import React from 'react'
import { Link } from 'react-router-dom'
import s from './ServiceItem.module.scss'

export default function ServiceItem(props) { 

    return (
        <Link to={props.link} className={s.item}>
            <img className={s.image} src={props.image} alt="service_image" />
            <div className={s.description}>{props.description}</div>
        </Link>
    )
}
