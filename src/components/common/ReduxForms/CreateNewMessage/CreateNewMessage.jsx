import React from 'react'
import { Field, Form, reduxForm } from 'redux-form';
import { Textarea } from './../../FormsControls/FormsControls'
import s from './CreateNewMessage.module.scss' 
import send from './../../../../images/SupportImages/send.png' 

export default function CreateNewMessage(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={s.create_new_message}>
                <Field name="new_message" placeholder="Введите ваш вопрос..." component={Textarea} />
                <button className={s.send}><img src={send} alt="send_image"></img></button>
            </div> 
        </Form>
    )
}

export const CreateNewMessageForm = reduxForm({ form: 'create_new_message' })(CreateNewMessage);
