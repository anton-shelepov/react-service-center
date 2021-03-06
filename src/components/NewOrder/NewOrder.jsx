import React from "react";
import { CreateNewOrderForm } from "../common/ReduxForms/CreateNewOrder/CreateNewOrderForm";

import s from "./NewOrder.module.scss";

export default function NewOrder(props) {
    const onSubmit = (formData) => { };

    return (
        <div className={s.order_wrapper}>
            <CreateNewOrderForm images={props.images} handleSubmit={onSubmit} />
        </div>
    );
}
