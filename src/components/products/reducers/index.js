import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';
import productFormReducer from './product-form-reducer';

//combine reducers
var reducers = combineReducers({
     productState:productReducer,
     productProfile:productFormReducer
});

export default reducers;