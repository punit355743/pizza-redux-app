import React from 'react';
import { connect } from 'react-redux';
import { buyPizza, buy100Pizza } from './../redux/pizza/pizzaAction';

function PizzaShop(props) {
    return (
        <div>

            <h1>Shop is close</h1>

            <h1 style={{ background: 'red' }}>Avaiable Pizza in shop {props.numberOfPizza} </h1>
            <button onClick={props.buyAPizza}>Buy a PIZZA</button>
            <button onClick={props.buy100Pizza}>Buy 100 PIZZAS</button>
            <button>Open A shop</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numberOfPizza: state.numberOFPizza
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyAPizza: () => { dispatch(buyPizza()) },
        buy100Pizza: () => { dispatch(buy100Pizza()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaShop);


