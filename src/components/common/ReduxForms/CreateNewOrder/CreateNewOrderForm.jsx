import React from 'react';
import { reduxForm } from 'redux-form';
import s from './CreateNewOrderForm.module.scss';
import btn from './../../../../Styles/buttons-styles.module.scss';
import About from './FormComponents/BlockBottom/About/About.jsx';
import PersonalData from './FormComponents/BlockTop/PersonalData';
import DeviceDescription from './FormComponents/BlockTop/DeviceDescription';
import BreakDescription from './FormComponents/BlockBottom/BreakDescription';
import AdditionalServices from './FormComponents/BlockBottom/AdditionalServices';
import { Link } from 'react-router-dom';

function CreateNewOrder(props) {  
    return (
        <div className={s.new_order_form}>
            <div className={s.order_title}>
                <Link to="/"> 
                    <span className={s.return}>↶</span>
                </Link>
                Создание нового заказа
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className={s.wrapper}>
                    <div className={s.block__top}>
                        <PersonalData images={props.images} />
                        <DeviceDescription images={props.images} />
                    </div>
                    <div className={s.block__bottom}>
                        <BreakDescription />
                        <AdditionalServices images={props.images} />
                        <About />
                    </div>
                    <div className={s.form_submit}>
                        <button className={btn.btn_style + ' ' + btn.custom_btn + ' ' + btn.btn_submit}> Оформить заказ </button>
                    </div>
                </div>
            </form>
        </div>
    );
} 

export const CreateNewOrderForm = reduxForm({ form: 'create_order' })(
    CreateNewOrder
);
