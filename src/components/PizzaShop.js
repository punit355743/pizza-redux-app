import React from 'react';
import { connect } from 'react-redux';
import { buyPizza, buy100Pizza, openPizzaShop } from './../redux/pizza/pizzaAction';

function PizzaShop(props) {
    return (
        <div>

            <h1>Shop is {props.isShopOpen ? 'Opend' : "Closed"}</h1>

            <h1 style={!props.isShopOpen ? { background: 'red' } : { background: 'green' }}>Avaiable Pizza in shop {props.numberOfPizza} </h1>
            <button disabled={!props.isShopOpen} onClick={props.buyAPizza}>Buy a PIZZA</button>
            <button disabled={!props.isShopOpen} onClick={props.buy100Pizza}>Buy 100 PIZZAS</button>
            <button onClick={props.openPizzaShop}>{props.isShopOpen ? 'Close A shop' : 'Open A shop'}</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numberOfPizza: state.pizza.numberOFPizza,
        isShopOpen: state.pizza.isShopOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyAPizza: () => { dispatch(buyPizza()) },
        buy100Pizza: () => { dispatch(buy100Pizza()) },
        openPizzaShop: () => { dispatch(openPizzaShop()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaShop);


