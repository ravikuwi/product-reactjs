import React from 'react'
import _ from 'lodash'
import ProdList from './views/product-list'
import * as productApi from './api/product-api'
import {Link} from 'react-router'
import store from '../../store'
import { connect } from 'react-redux'



const ProductListContainer = React.createClass({


    componentDidMount: function() {
        productApi.getAllProducts();
    },

    render: function() {
        return (
            <div className="products-list">
                <Link to={"/add"} className="btn btn-info btn-sm"> Add </Link>
                <ProdList products={this.props.products} deleteProduct={productApi.deleteProduct}/>
           </div>
        );
    }



});


const mapStateToProps = function(store) {
    console.info("store in product list container",store);
    return {
        products: store.productState.products
    };
};


export default connect(mapStateToProps)(ProductListContainer);