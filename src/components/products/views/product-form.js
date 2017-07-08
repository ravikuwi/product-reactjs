import React from 'react';
import * as productApi from '../api/product-api'
import {Link} from 'react-router'

const ProductForm = React.createClass({

    getInitialState: function () {
        return {id:"", productName: "", description: "", price: "", sku: "", ratings:"", updateProduct:false, errors: {},currentHeader:"", message:""}
    },


    componentDidMount:function(){

        if(this.props.params.productId) {
            productApi.getProductById(this.props.params.productId).then(product => {
                this.state.productName=this.refs.productName.value=product.name;
                this.state.description=this.refs.description.value=product.description;
                this.state.price=this.refs.price.value=product.price;
                this.state.sku=this.refs.sku.value=product.sku;
                this.state.ratings=this.refs.ratings.value=product.ratings;
                this.state.id=product.id;
            });

            this.state.updateProduct=true;
            this.setState({currentHeader:"Update the Product"});
        }else{
            this.setState({currentHeader:"Add a new Product"});
        }
    },

    onSubmit:function(e){
        console.log("in submit");
        e.preventDefault();
        var errors = this.validate();
        console.info("errors",errors);
        if(Object.keys(errors).length != 0) {
            this.setState({
                errors: errors
            });
            return;
        }

        console.log("After validation");
        if(this.state.updateProduct){
            productApi.updateProduct({
                id:this.state.id,
                name:this.state.productName,
                description:this.state.description,
                price:this.state.price,
                sku:this.state.sku,
                ratings:this.state.ratings
            });
            this.setState({message:"Updated the product Successfully."});
        }else {
            productApi.createProduct({
                name: this.state.productName,
                description: this.state.description,
                price: this.state.price,
                sku: this.state.sku,
                ratings: this.state.ratings
            });
            this.refs.productName.value = "";
            this.refs.description.value = "";
            this.refs.price.value = "";
            this.refs.sku.value = "";
            this.refs.ratings.value = "";
            this.setState(this.getInitialState());
            this.setState({message:"Added new product Successfully.",
                           currentHeader:"Add a new Product"});
        }
    },



    getButtonText:function(){
        if(this.state.updateProduct){
            return "Update";
        }else{
            return "Submit";
        }
    },

    _onChange: function (e) {
        var state = {};
        state[e.target.name] =  $.trim(e.target.value);
        this.setState(state);
    },

    validate: function () {
        var errors = {}
        if(this.state.productName == "") {
            errors.name = "error";
        }
        if(this.state.description == "") {
            errors.description = "error";
        }
        if(this.state.price == "") {
            errors.price = "error";
        }
        if(this.state.sku == "") {
            errors.sku = "error";
        }
        if(this.state.ratings == "") {
            errors.rating = "error";
        }
        return errors;
    },



    render: function() {
        return (
            <div className="product-profile">
              <h1>{this.state.currentHeader}</h1>

                <h4>{this.state.message} {this.state.message
            ? <Link className="btn btn-success btn-sm" to="/products">Back</Link> : ""}</h4>
                <form ref='product_form' onSubmit={this.onSubmit}>

                     <div className="product-detail">
                        <label>
                          <span className="product-label"> Name:</span>
                          <input type="text" name="productName"  className={this.state.errors.name} ref="productName" onChange={this._onChange}/>
                       </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Description:</span>
                            <input type="text" name="description" className={this.state.errors.description} ref="description" onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Price:</span>
                            <input type="text" name="price" ref="price" className={this.state.errors.price} onChange={this._onChange} />
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> SKU:</span>
                            <input type="text" name="sku" ref="sku" className={this.state.errors.sku} onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span className="product-label"> Rating:</span>
                            <input type="text" name="ratings" ref="ratings" className={this.state.errors.rating} onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="form-controls">
                       <button type="submit" className="submit btn btn-success btn-sm" >{this.getButtonText()}</button>
                       <button type="reset" className="reset btn btn-danger btn-sm">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default ProductForm;