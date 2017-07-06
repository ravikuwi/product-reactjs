import { createStore } from 'redux';
import reducers from './components/products/reducers';

const store = createStore(reducers);
export default store;