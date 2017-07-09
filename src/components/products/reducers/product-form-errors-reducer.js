

const initialState = {
    errors: {}

};

const productFormReducer = function(state = initialState, action) {

    switch(action.type) {


        case 'GET_PRODUCT_PROFILE':
            return Object.assign({}, state, { product : action.product });


        case 'ADD_PRODUCT':
            return Object.assign({}, state, { product : action.product });


        case 'EDIT_PRODUCT':
            const editProduct = Object.assign({}, initialState, {action.product});
            editProduct.updateProduct=true;
            editProduct.currentHeader="Update the Product";
            return Object.assign({}, state, { product : editProduct });

}

    return state;

}

export default productFormReducer;