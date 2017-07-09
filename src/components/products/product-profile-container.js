import React from 'react';
import * as productApi from './api/product-api'
import {Link} from 'react-router'
import ProductProfile from './views/product-profile'
import store from '../../store'
import { connect } from 'react-redux'


const ProductProfileContainer = React.createClass({


    componentDidMount:function(){
        productApi.getProductById(this.props.params.productId);
    },

    render: function() {
        return(<ProductProfile product={this.props.product}/>);
    }
});

const mapStateToProps = function(store) {

    return {
        product: store.productState.product
    };
};


export default connect(mapStateToProps)(ProductProfileContainer);