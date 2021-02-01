import { BUY_PIZZA, BUY_100_PIZZA, OPEN_PIZZA_SHOP } from "./pizzaType"

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

export const openPizzaShop = () => {
    return {
        type: OPEN_PIZZA_SHOP
    }
}