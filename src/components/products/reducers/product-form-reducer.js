

const initialState = {
    product: {id:"", productName: "", description: "", price: "", sku: "", ratings:"", updateProduct:false, errors:{}, currentHeader:"", message:""}

};

const productFormReducer = function(state = initialState, action) {

    switch(action.type) {


        case 'GET_PRODUCT_PROFILE':
            return Object.assign({}, state, { product : action.product });


        case 'ADD_PRODUCT':
            return Object.assign({}, state, { product : action.product });


        case 'GET_PRODUCT_PROFILE_EDIT':
            const editProduct = Object.assign({}, initialState);
            console.info("initial state",editProduct);
            editProduct.productName=action.product.name;
            editProduct.id=action.product.id;
            editProduct.description=action.product.description;
            editProduct.sku=action.product.sku;
            editProduct.ratings=action.product.ratings;
            editProduct.price=action.product.price;
            editProduct.updateProduct=true;
            editProduct.currentHeader="Update the Product";
            editProduct.errors={};
            return Object.assign({}, state, { product : editProduct });

    }

    return state;

}

export default productFormReducer;