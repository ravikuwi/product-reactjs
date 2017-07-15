

const initialState = {
    id:"", productName: "", description: "", price: "", sku: "", ratings:"", updateProduct:false, errors:{}, currentHeader:"", message:"", buttonText:""

};

const productFormReducer = function(state = initialState, action) {

    switch(action.type) {


        case 'GET_PRODUCT_PROFILE':
            return Object.assign({}, initialState, {
                id:action.product.id,
                productName:action.product.name,
                description:action.product.description,
                price:action.product.price,
                sku:action.product.sku,
                ratings:action.product.ratings
            });


        case 'ADD_PRODUCT':
            return Object.assign({}, initialState, {
                updateProduct:false,
                currentHeader:"Add a new Product",
                buttonText:"Add"
            });


        case 'GET_PRODUCT_PROFILE_EDIT':
            return Object.assign({}, initialState, {
                id:action.product.id,
                productName:action.product.name,
                description:action.product.description,
                price:action.product.price,
                sku:action.product.sku,
                ratings:action.product.ratings,
                errors:{},
                updateProduct:true,
                currentHeader:"Update the Product",
                buttonText:"Update"
            });

    }

    return state;

}

export default productFormReducer;