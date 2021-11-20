import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import s from './CreateNewOrder.module.scss'

function CreateNewOrder(props) {
    return (
        <div className={s.new_order_form}>
            <div className={s.order_title}>Создание нового заказа</div>
            <form onSubmit={props.handleSubmit}>
                <div className={s.wrapper}>
                    <div className={s.block__top}>
                        <div className={s.personal_data}>
                            <span className={s.title}>Введите ваши персональные данные</span>
                            <span className={s.subtitle}>Убедитесь в корректности введенных вами данных, в противном случае заказ не будет оформлен</span>
                            <div className={s.items}>
                                <div className={s.item}>
                                    <label className={s.label}>ФИО</label>
                                    <Field name="full_name" component={Input} />
                                </div>
                                <div className={s.item}>
                                    <label className={s.label}>Телефон</label>
                                    <Field name="phone_number" component={Input} />
                                </div>
                            </div>
                        </div>
                        <div className={s.device_description}>
                            <span className={s.title}>Введите данные оборудования</span>
                            <span className={s.subtitle}>Постарайтесь как можно точнее определить информацию о неисправном устройстве</span>
                            <div className={s.items}>
                                <div className={s.item}>
                                    <label className={s.label}>Группа</label>
                                    <Field name="group" placeholder="Смартфон..." component={Input} />
                                </div>
                                <div className={s.item}>
                                    <label className={s.label}>Бренд</label>
                                    <Field name="brand" placeholder="Samsung..." component={Input} />
                                </div>
                                <div className={s.item}>
                                    <label className={s.label}>Модель</label>
                                    <Field name="model" placeholder="Galaxy S21..." component={Input} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={s.block__bottom}>
                        <div className={s.break_description}>
                            <div className={s.title}>Опишите суть поломки</div>
                            <div className={s.subtitle}>Для более корректного проведения ремонта, расскажите все подробности о неисправности вашего оборудования и известным вам причинам его поломки</div>
                            <Field name="break_description" component={Textarea} />
                        </div>
                        <div className={s.additional_services}>
                            <div className={s.title}>Дополнительные услуги</div>
                            <div className={s.input}>
                                <label className={s.label}>Услуга вывоза оборудования</label>
                                <Field name="delivery" component={Input} type="checkbox" />
                            </div>
                            <div className={s.input}>
                                <label className={s.label}>Вызов мастера на дом</label>
                                <Field name="master" component={Input} type="checkbox" />
                            </div>
                        </div>
                        <button className={s.submit_button}>Создать заказ</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const CreateNewOrderForm = reduxForm({ form: "create_order" })(CreateNewOrder)
