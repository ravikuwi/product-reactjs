import axios from 'axios';
import { getProductsSuccess, deleteProductSuccess, productProfileSuccess } from '../actions/product-actions'


export function getAllProducts() {
    return axios.get('http://localhost:8080/o/products/products/')
            .then(response => response.data);
}


export function getProductById(productId) {
    console.log("in getproduct by id");
    console.log(productId);
    return axios.get('http://localhost:8080/o/products/products/' + productId)
        .then(response=>response.data);
}


export function updateProduct(product) {
    return axios.put('http://localhost:8080/o/products/products/', {
        id:product.id,
        name: product.name,
        description:product.description,
        price:product.price,
        sku:product.sku,
        ratings:product.ratings
    })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}


export function deleteProduct(productId) {
    return axios.delete('http://localhost:8080/o/products/products/' + productId);
}


export function createProduct(product) {
    console.info("product from submit",product);
    return axios.post('http://localhost:8080/o/products/products/', {
        name: product.name,
        description:product.description,
        price:product.price,
        sku:product.sku,
        ratings:product.ratings
       })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}



