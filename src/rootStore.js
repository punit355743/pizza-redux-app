import { combineReducers } from "redux";
import { pizzaReducer } from './redux/pizza/pizzaReducer'
import { iceCreamReducer } from './redux/Icecream/iceCreamReducer'
import { userReducer } from './redux/users/userReducer'


export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    icecream: iceCreamReducer,
    user: userReducer
}); 