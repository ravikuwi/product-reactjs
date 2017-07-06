import React from 'react';

const ProductProfile = React.createClass({
    render: function() {
        return (
            <div className="product-profile">
                <h1>Details for Product Id: {this.props.params.productId}</h1>
                <div className="product-detail">
                   <label>
                      <span class="product-label"> Name:</span>
                      <span className="product-info"> {this.props.params.productName}   </span>
                   </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Description:</span>
                        <span className="product-info"> {this.props.params.productDescription} </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Price:</span>
                        <span className="product-info"> {this.props.params.productPrice}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> SKU:</span>
                        <span className="product-info"> {this.props.params.productSKU}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span class="product-label"> Ratings:</span>
                        <span className="product-info"> {this.props.params.productRatings}   </span>
                    </label>
                </div>
            </div>
        );
    }
});

export default ProductProfile;