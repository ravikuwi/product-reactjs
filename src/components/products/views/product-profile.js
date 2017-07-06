import React from 'react';
import * as productApi from '../api/product-api'


const ProductProfile = React.createClass({

    getInitialState: function() {
        return {
            product: {}
        }
    },

    componentDidMount:function(){
        productApi.getProductById(this.props.params.productId).then(product => {
            console.info("product",product);
            this.setState({product: product})
    });
    },

    render: function() {
        return (
            <div className="product-profile">
                <h1>Details for Product Id: {this.props.params.productId}</h1>
                <div className="product-detail">
                   <label>
                      <span class="product-label"> Name:</span>
                      <span className="product-info"> {this.state.product.name}   </span>
                   </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Description:</span>
                        <span className="product-info"> {this.state.product.description} </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Price:</span>
                        <span className="product-info"> {this.state.product.price}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> SKU:</span>
                        <span className="product-info"> {this.state.product.sku}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Ratings:</span>
                        <span className="product-info"> {this.state.product.ratings}   </span>
                    </label>
                </div>
            </div>
        );
    }
});

export default ProductProfile;