import React from 'react';
import * as productApi from '../api/product-api'
import {Link} from 'react-router'

const ProductForm = React.createClass({



    render: function() {
        return (
            <div className="product-profile">
              <h1>{this.props.product.currentHeader}</h1>

                <h4>{this.props.product.message} {this.props.product.message
            ? <Link className="btn btn-success btn-sm" to="/products">Back</Link> : ""}</h4>
                <form ref='product_form' onSubmit={this.props.onSubmit}>

                     <div className="product-detail">
                        <label>
                          <span className="product-label"> Name:</span>
                          <input type="text" name="productName"  className={this.props.product.errors.name} value={this.props.product.productName} onChange={this.props.onChange}/>
                       </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Description:</span>
                            <input type="text" name="description" className={this.props.product.errors.description} value={this.props.product.description} onChange={this.props.onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Price:</span>
                            <input type="text" name="price" value={this.props.product.price} className={this.props.product.errors.price} onChange={this.props.onChange} />
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> SKU:</span>
                            <input type="text" name="sku" value={this.props.product.sku} className={this.props.product.errors.sku} onChange={this.props.onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Rating:</span>
                            <input type="text" name="ratings" value={this.props.product.ratings} className={this.props.product.errors.rating} onChange={this.props.onChange}/>
                        </label>
                    </div>
                    <div className="form-controls">
                       <button type="submit" className="submit btn btn-success btn-sm" >{this.props.getButtonText()}</button>
                       <button type="reset" className="reset btn btn-danger btn-sm">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default ProductForm;