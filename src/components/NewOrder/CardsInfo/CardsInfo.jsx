import React from 'react'
import s from './CardsInfo.module.scss'

export default function CardsInfo(props) {
    return (
        <div className={s.cards_info__items}>
            {props.cardsInfo.map((item) => (
                <div className={s.item}>
                    <img src={item.image} alt="" />
                    <span className={s.description}>{item.description}</span> 
                </div>
            ))}
        </div>
    )
}
