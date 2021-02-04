import { combineReducers } from "redux";
import { pizzaReducer } from './redux/pizza/pizzaReducer'
import { iceCreamReducer } from './redux/Icecream/iceCreamReducer'


export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    icecream: iceCreamReducer
}); 