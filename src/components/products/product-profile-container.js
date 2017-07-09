import React from 'react';
import * as productApi from './api/product-api'
import {Link} from 'react-router'
import ProductProfile from './views/product-profile'


const ProductProfileContainer = React.createClass({

    getInitialState: function() {
        return {
            product: {}
        }
    },

    componentDidMount:function(){
        productApi.getProductById(this.props.params.productId).then(product => {
        this.setState({product: product})
    });
    },

    render: function() {
        return(<ProductProfile product={this.state.product}/>);
    }
});

export default ProductProfileContainer;