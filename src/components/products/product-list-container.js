import React from 'react';
import _ from 'lodash';
import ProdList from './views/product-list';


const ProductListListContainer = React.createClass({

    getInitialState: function() {
        return {
            products: []
        }
    },

    componentDidMount: function() {
        var _this = this;
        $.get('http://localhost:3000/products').then(function(response) {
            _this.setState({products: response})
        });
    },


    render: function() {
        return (
            <ProdList products={this.state.products} />
        );
    }

});

export default ProductListListContainer;