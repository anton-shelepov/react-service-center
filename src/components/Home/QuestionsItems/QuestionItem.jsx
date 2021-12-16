import React, { useState } from 'react'
import s from './QuestionItem.module.scss'

export default function QuestionItem({question}) {

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
        <div className={s.item} onClick={() => toggle(question)} >
            <div className={s.question}>
                <span className={selectedItems.some((i) => i === question) ? s.title_bold : s.title}>{question.title}</span>
                <i className={selectedItems.some((i) => i === question) ? s.icon_selected : s.icon}>ᐁ</i>
            </div>
            <div className={selectedItems.some((i) => i === question) ? s.answer_show : s.answer}>{question.answer}</div>
        </div>
    )
}
