import React from 'react'
import About from './About/About'
import { CreateNewOrderForm } from './CreateNewOrder/CreateNewOrder'
import s from './NewOrder.module.scss'

export default function NewOrder(props) { 
    return ( 
        <div className={s.order_wrapper}>
            <CreateNewOrderForm images={props.images}/>
            <About />
        </div>
    )
} 