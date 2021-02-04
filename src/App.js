import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import PizzShop from './components/PizzaShop';
import { PizzaShopHook } from './components/PizzaShopHook';
import IceCream from './components/IceCream';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux app demo</h1>
        <PizzShop />
        <br></br>
        <PizzaShopHook />
        <br></br>
        <IceCream />
      </div>
    </Provider>
  );
}

export default App;
