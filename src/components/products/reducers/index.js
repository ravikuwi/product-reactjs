import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';

//combine reducers
var reducers = combineReducers({
    productState: productReducer
});

export default reducers;