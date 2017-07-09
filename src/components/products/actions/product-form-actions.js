


export function getProductProfile(product,forEdit) {

    if(forEdit){
        console.log("Returning get product edit");
        return {
            type: 'GET_PRODUCT_PROFILE_EDIT',
            product
        }

    }else {
        return {
            type: 'GET_PRODUCT_PROFILE',
            product
        }
    }
}


export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    };
}


export function editProduct(product) {
    return {
        type: 'EDIT_PRODUCT',
        product
    };
}


