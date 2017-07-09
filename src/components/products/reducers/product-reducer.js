import _ from 'lodash';

const initialState = {
    products: []
};

const productReducer = function(state = initialState, action) {

    switch(action.type) {

            case 'GET_PRODUCTS_SUCCESS':
                return Object.assign({}, state, { products: action.products });


            case 'DELETE_PRODUCT':
                // Use lodash to create a new user array without the user we want to remove
                const newProducts = _.filter(state.products, product => product.id != action.productId);
                return Object.assign({}, state, { products: newProducts });

    }

    return state;

}

export default productReducer;