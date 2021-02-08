
import { BUY_ICECREAM } from './iceCreamType';

const initailState = {
    numberOFIcecreams: 50
}


export const iceCreamReducer = (state = initailState, action) => {

    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOFIcecreams: state.numberOFIcecreams - action.payload
        }


        default: return state
    }

}
