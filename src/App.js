import './App.css';
import { Provider } from 'react-Redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux app demo</h1>
      </div>
    </Provider>
  );
}

export default App;
