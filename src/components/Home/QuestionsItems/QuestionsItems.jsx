import React, { useState } from 'react'
import s from './QuestionsItems.module.scss'

export default function QuestionsItems(props) {

    const [selected, setSelected] = useState((null))

    const toggle = (item) => {
        if (selected === item) {
            return setSelected(null)
        }
        setSelected(item)
    }

    return (
        <div className={s.questions_items}>
            {props.questions.map(item => (
                <div className={s.item} onClick={() => toggle(item)} >
                    <div className={s.question}>
                        <span className={selected === item ? s.title_bold : s.title}>{item.title}</span>
                        <i className={selected === item ? s.icon_selected : s.icon}>ᐁ</i>
                    </div>
                    <div className={selected === item ? s.answer_show : s.answer}>{item.answer}</div>
                </div>
            ))} 
        </div>
    )
}
