

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

