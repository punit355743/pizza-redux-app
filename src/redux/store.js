import { createStore } from 'redux';
import { rootReducer } from './../rootStore';

export const store = createStore(rootReducer);