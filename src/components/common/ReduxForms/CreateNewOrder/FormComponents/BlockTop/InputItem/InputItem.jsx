import React from 'react'
import Media from 'react-media'
import { Field } from 'redux-form'
import s from './../../../CreateNewOrderForm.module.scss'
import { Input } from '../../../../../FormsControls/FormsControls'

export default function InputItem(props) {
    return (
        <div className={s.item}>
            <Media query="(max-width: 500px)">
                {matches =>
                    matches ? (
                        <div className={s.item_name}>
                            <label className={s.label} htmlFor={props.name}>{props.label}</label>
                        </div>
                    ) : (
                        <div className={s.item_name}>
                            <img src={props.image} alt="" />
                            <label className={s.label} htmlFor={props.name}>{props.label}</label>
                        </div>
                    )
                }
            </Media>
            <Field name={props.name} id={props.name} placeholder={props.placeholder} component={Input} />
        </div>
    )
}
