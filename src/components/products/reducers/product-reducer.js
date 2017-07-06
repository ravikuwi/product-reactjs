import _ from 'lodash';

const initialState = {
    products: [],
    productProfile: {
    }
};

const productReducer = function(state = initialState, action) {

    switch(action.type) {

        case 'GET_USERS_SUCCESS':
            return Object.assign({}, state, { users: action.users });

        case 'DELETE_PRODUCT_SUCCESS':

            // Use lodash to create a new user array without the user we want to remove
            const newProducts = _.filter(state.products, product => product.id != action.userId);
            return Object.assign({}, state, { products: newProducts });

        case 'PRODUCT_PROFILE_SUCCESS':
            return Object.assign({}, state, { productProfile : action.product });

        case 'ADD_PROFILE_SUCCESS':
            return Object.assign({}, state, { productProfile : action.product });

        case 'EDIT_PRODUCT_SUCCESS':
            return Object.assign({}, state, { productProfile : action.product });

    }

    return state;

}

export default productReducer;