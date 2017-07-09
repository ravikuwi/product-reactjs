

export function getProductsSuccess(products) {
    return {
        type: 'GET_PRODUCTS_SUCCESS',
        products
    };
}

export function deleteProductSuccess(productId) {
    return {
        type: 'DELETE_PRODUCT',
        productId
    };
}

export function getProductProfile(productId) {
    return {
        type: 'GET_PRODUCT_PROFILE',
        productId
    };
}


export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    };
}


export function editProductSuccess(product) {
    return {
        type: 'EDIT_PRODUCT',
        product
    };
}