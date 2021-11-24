import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { reducer as formReducer } from "redux-form";
import homeReducer from "./home-reducer";
import newOrderReducer from "./new-order-reducer";
import ordersStatusReducer from "./orders-status-reducer";

let reducers = combineReducers({ 
    home: homeReducer,
    newOrder: newOrderReducer,
    ordersStatus: ordersStatusReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store; 