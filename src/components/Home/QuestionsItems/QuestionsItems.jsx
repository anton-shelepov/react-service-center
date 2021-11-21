import React, { useState } from 'react'
import s from './QuestionsItems.module.scss'

export default function QuestionsItems(props) {

    const [selectedItems, setSelectedItems] = useState([])

    const toggle = (newItem) => { 
        const currentItems = selectedItems.filter((oldItem) => oldItem !== newItem)
        if (currentItems.length < selectedItems.length) {
            setSelectedItems(() => [...currentItems])
        }
        else {
            setSelectedItems((oldItems) => [...oldItems, newItem])
        } 
    } 
    
    return (
        <div className={s.questions_items}>
            {props.questions.map(item => (
                <div className={s.item} onClick={() => toggle(item)} >
                    <div className={s.question}>
                        <span className={selectedItems.some((i) => i === item) ? s.title_bold : s.title}>{item.title}</span>
                        <i className={selectedItems.some((i) => i === item) ? s.icon_selected : s.icon}>ᐁ</i>
                    </div>
                    <div className={selectedItems.some((i) => i === item) ? s.answer_show : s.answer}>{item.answer}</div>
                </div>
            ))}
        </div>
    )
}
