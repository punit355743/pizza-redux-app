import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from './../redux/Icecream/iceCreamAction'

function IceCream(props) {
    const iceCream = useSelector(state => state.icecream.numberOFIcecreams);
    const pizaa2 = useSelector(state => state);
    console.log(pizaa2);
    const pizaa = useSelector(state => state.pizza.numberOFPizza);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of iceCream shop in {iceCream}</h1>
            <h1>Number of pizaa shop in {pizaa}</h1>
            pizaa
            <button onClick={() => { dispatch(buyIcecream()) }
            }>Buy a ice-Cream</button>
        </div>
    );
}

export default IceCream;