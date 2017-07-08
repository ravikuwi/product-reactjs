import React from 'react'
import _ from 'lodash'
import ProdList from './views/product-list'
import * as productApi from './api/product-api'
import {Link} from 'react-router'



const ProductListContainer = React.createClass({

    getInitialState: function() {
        return {
            products: []
        }
    },

    componentDidMount: function() {
        productApi.getAllProducts().then(products => {
            console.info("products",products);
            this.setState({products: products})
    });
    },




      deleteProduct: function(productId) {
          productApi.deleteProduct(productId).then(() => {
              const newProducts = _.filter(this.state.products, product => product.id != productId);
          this.setState({products: newProducts})
      });
      },


    render: function() {
        return (
            <div className="products-list">
                <Link to={"/add"} className="btn btn-info btn-sm"> Add </Link>
                <ProdList products={this.state.products} deleteProduct={productApi.deleteProduct}/>
           </div>
        );
    }

});

/*const mapStateProps = function(store) {
    return {
        products: store.products
    };
};*/


export default ProductListContainer;