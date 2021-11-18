import order from './../images/HomeImages/order.png'
import order_status from './../images/HomeImages/order_status.png'
import data from './../images/HomeImages/data.png'
import support from './../images/HomeImages/support.png'

const SHOW_ANSWER = "SHOW_ANSWER"; 

let initialState = { 
    services_items: [ 
        { service_image: order, description: 'Создать новый заказ' },
        { service_image: order_status, description: 'Посмотреть статус заказов' },
        { service_image: data, description: 'Редактировать личные данные' },
        { service_image: support, description: 'Техническая поддержка' },
    ],
    questions: [
        { title: 'Что делать если нет возможности привезти технику в сервисный центр', answer: '', isCollapsed: false },
        { title: 'Что делать если нет возможности привезти технику в сервисный центр', answer: '', isCollapsed: false },
        { title: 'Что делать если нет возможности привезти технику в сервисный центр', answer: '', isCollapsed: false }
    ], 
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ANSWER:
            return null
        default:
            return state;
    }
}

export default homeReducer;