import { BUY_PIZZA, BUY_100_PIZZA, OPEN_PIZZA_SHOP } from './pizzaType'

const initailState = {
    numberOFPizza: 500,
    isShopOpen: false
}

export const pizzaReducer = (state = initailState, action) => {

    switch (action.type) {
        case BUY_PIZZA: return {
            ...state,
            numberOFPizza: state.numberOFPizza - 1
        }

        case BUY_100_PIZZA: return {
            ...state,
            numberOFPizza: state.numberOFPizza - 100
        }
        case OPEN_PIZZA_SHOP: return {
            ...state,
            isShopOpen: !state.isShopOpen
        }


        default: return state
    }


}