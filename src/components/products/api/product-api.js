import axios from 'axios';
import store from '../../../store'
import { getProductsSuccess, deleteProductSuccess } from '../actions/product-actions'
import {getProductProfile, addProduct, editProduct} from '../actions/product-form-actions'


export function getAllProducts() {
    return axios.get('http://localhost:8080/o/products/products/')
            .then(response => {
                return response.data;
            })
            .catch(error =>{
                return error;

            });

}


export function getProductById(productId,forEdit) {
    return axios.get('http://localhost:8080/o/products/products/' + productId)
        .then(response=>{
                store.dispatch(getProductProfile(response.data,forEdit));
          return  response.data
        })
         .catch(error => {
             console.info("Error in getting product", error);
             return error;
        });
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
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}


export function deleteProduct(productId) {
    return axios.delete('http://localhost:8080/o/products/products/' + productId).then(
        response=>{
            return response;
        }
    ).catch(error=>{
          return error;
    });
}


export function createProduct(product) {

    return axios.post('http://localhost:8080/o/products/products/', {
        name: product.name,
        description:product.description,
        price:product.price,
        sku:product.sku,
        ratings:product.ratings
       })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}



