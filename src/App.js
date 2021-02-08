import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import PizzShop from './components/PizzaShop';
import { PizzaShopHook } from './components/PizzaShopHook';
import IceCream from './components/IceCream';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux app demo</h1>
        <UserComponent />
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
