import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from './../redux/Icecream/iceCreamAction'

function IceCream(props) {
    const [iceCreamCount, seticeCreamCount] = useState(1);
    const iceCream = useSelector(state => state.icecream.numberOFIcecreams);
    const pizaa2 = useSelector(state => state);
    const pizaa = useSelector(state => state.pizza.numberOFPizza);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of iceCream shop in {iceCream}</h1>
            <h1>Number of pizaa shop in {pizaa}</h1>

            <input type="text" value={iceCreamCount} onChange={(e) => {
                seticeCreamCount(e.target.value)
            }} />
            <button onClick={() => { dispatch(buyIcecream(iceCreamCount)) }
            }>Buy {iceCreamCount} ice-Cream</button>
        </div >
    );
}

export default IceCream;