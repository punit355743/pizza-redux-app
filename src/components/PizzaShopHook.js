import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPizza } from './../redux/pizza/pizzaAction';

export function PizzaShopHook() {

    const numberOFPizza = useSelector(state => state.pizza.numberOFPizza);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>react redux hooks</h1>
            <h2>Avaiable Pizza in shop {numberOFPizza} </h2>
            <button onClick={() => {
                dispatch(buyPizza());
            }}>Buy a PIZZA</button>
        </div>
    );
}