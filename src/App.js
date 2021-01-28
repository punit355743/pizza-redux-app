import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import PizzShop from './components/PizzaShop';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux app demo</h1>
        <PizzShop />
      </div>
    </Provider>
  );
}

export default App;
