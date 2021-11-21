import full_name from './../images/NewOrderImages/full_name.png';
import brand from './../images/NewOrderImages/brand.png';
import group from './../images/NewOrderImages/group.png';
import model from './../images/NewOrderImages/model.png';
import phone from './../images/NewOrderImages/phone.png';
import address from './../images/NewOrderImages/address.png';
import details from './../images/NewOrderImages/CardsInfoImages/details.png';
import period from './../images/NewOrderImages/CardsInfoImages/period.png';
import reputation from './../images/NewOrderImages/CardsInfoImages/reputation.png';
import prices from './../images/NewOrderImages/CardsInfoImages/prices.png';


let initialState = {
    orderImages: {
        full_name,
        brand,
        group,
        model,
        phone,
        address
    },
    cardsInfo: [
        { description: "Оригинальные запчасти", image: details },
        { description: "Короткие сроки ремонта", image: period },
        { description: "Хорошая репутация на рынке", image: reputation },
        { description: "Низкие цены и постоянные скидки", image: prices },
    ]

}

const newOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newOrderReducer;