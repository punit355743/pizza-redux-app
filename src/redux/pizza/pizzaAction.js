import { BUY_PIZZA, BUY_100_PIZZA } from "./pizzaType"

export const buyPizza = () => {
    return {
        type: BUY_PIZZA
    }
}

export const buy100Pizza = () => {
    return {
        type: BUY_100_PIZZA
    }
}