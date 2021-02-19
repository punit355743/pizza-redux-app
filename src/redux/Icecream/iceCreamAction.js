import { BUY_ICECREAM } from "./iceCreamType"

export const buyIcecream = (number) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}