import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import homeReducer from "./home-reducer";

let reducers = combineReducers({ 
    home: homeReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store; 