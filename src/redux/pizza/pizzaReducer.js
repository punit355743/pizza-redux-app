import { BUY_PIZZA } from './pizzaType'

const initailState = {
    numberOFPizza: 500
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

        default: return state
    }


}