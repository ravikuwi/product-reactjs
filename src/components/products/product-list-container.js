import React from 'react'
import _ from 'lodash'
import ProdList from './views/product-list'
import * as productApi from './api/product-api'
import {Link} from 'react-router'
import store from '../../store'
import { connect } from 'react-redux'
import { getProductsSuccess, deleteProductSuccess } from './actions/product-actions'



const ProductListContainer = React.createClass({


    componentDidMount: function() {
        productApi.getAllProducts().then(response=>{
            store.dispatch(getProductsSuccess(response));
        })
        .catch(error=>{
            //handle the error action
            console.log(error);
        });

    },

    deleteProduct:function (productId) {
        productApi.deleteProduct(productId).then(response=>{
            store.dispatch(deleteProductSuccess(productId));
        }).catch (error=>{
           //handle the error action
            console.log(error);
        });

    },

    render: function() {
        return (
            <div className="products-list">
                <Link to={"/add"} className="btn btn-info btn-sm"> Add </Link>
                <ProdList products={this.props.products} deleteProduct={this.deleteProduct}/>
           </div>
        );
    }



});


const mapStateToProps = function(store) {
    return {
        products: store.productState.products
    };
};


export default connect(mapStateToProps)(ProductListContainer);