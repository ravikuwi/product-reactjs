

export function getProductsSuccess(products) {
    return {
        type: 'GET_PRODUCTS_SUCCESS',
        products
    };
}

export function deleteProductSuccess(productId) {
    return {
        type: 'DELETE_PRODUCT_SUCCESS',
        productId
    };
}

export function productProfileSuccess(product) {
    return {
        type: 'PRODUCT_PROFILE_SUCCESS',
        product
    };
}


export function addProductSuccess(product) {
    return {
        type: 'ADD_PRODUCT_SUCCESS',
        product
    };
}


export function editProductSuccess(product) {
    return {
        type: 'EDIT_PRODUCT_SUCCESS',
        product
    };
}