import React from 'react';
import {Link} from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


const ProductProfile = React.createClass({


    render: function() {
        return (
            <div className="product-profile">
                <h1>Details for Product Id: {this.props.product.id}</h1>
                <div className="product-detail">
                   <label>
                      <span className="product-label"> Name:</span>
                      <span className="product-info"> {this.props.product.productName}   </span>
                   </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span className="product-label"> Description:</span>
                        <span className="product-info"> {this.props.product.description} </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span className="product-label"> Price:</span>
                        <span className="product-info"> ${this.props.product.price}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span className="product-label"> SKU:</span>
                        <span className="product-info"> {this.props.product.sku}   </span>
                    </label>
                </div>
                <div className="product-detail">
                    <label>
                        <span className="product-label"> Ratings:</span>
                        <span className="product-info">
                           <StarRatingComponent
                             name="prodRating"
                             editing={false}
                             starCount={5}
                             value={this.props.product.ratings}
                        />  </span>
                    </label>
                </div>
                <Link to="/products" className="btn btn-info back">Back</Link>
            </div>
        );
    }
});

export default ProductProfile;