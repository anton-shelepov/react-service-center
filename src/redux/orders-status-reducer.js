let initialState = {
    orders: [
        {
            device_name: "Смартфон Samsung Galaxy s21",
            date: new Date(2021, 11, 24).toLocaleDateString(),
            status: "Не готов",
            break_description: "Tempor occaecat pariatur incididunt voluptate do Lorem sint cillum aliqua non. Aliquip ipsum sunt ad magna ullamco eu ipsum nostrud magna nostrud magna id. Ut enim exercitation ea sint incididunt amet adipisicing. Amet officia id voluptate elit irure ullamco laborum elit ex magna. Ullamco quis excepteur et adipisicing mollit deserunt. Do adipisicing consectetur Lorem labore eiusmod tempor nulla proident sunt occaecat nisi proident."
        }
    ]
}

const ordersStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ordersStatusReducer;