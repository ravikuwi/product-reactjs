import React from 'react';
import * as productApi from '../api/product-api'

const ProductForm = React.createClass({

    getInitialState: function () {
        return {id:"", productName: "", description: "", price: "", sku: "", ratings:"", updateProduct:false, errors: {}}
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
            console.log("in update product");
            productApi.updateProduct({
                id:this.state.id,
                name:this.state.productName,
                description:this.state.description,
                price:this.state.price,
                sku:this.state.sku,
                ratings:this.state.ratings
            });
        }else {
            productApi.createProduct({
                name: this.state.productName,
                description: this.state.description,
                price: this.state.price,
                sku: this.state.sku,
                ratings: this.state.ratings
            });
        }


        if(!this.state.updateProduct) {
            this.refs.productName.value = "";
            this.refs.description.value = "";
            this.refs.price.value = "";
            this.refs.sku.value = "";
            this.refs.ratings.value = "";
            this.setState(this.getInitialState());
        }


    },

    getHeader:function(){
        if(this.state.updateProduct){
             return(<h1>Update the Product</h1>);
        }else{
            return(<h1>Add a new Product</h1>);
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
            errors.name = "Product Name is required";
        }
        if(this.state.description == "") {
            errors.description = "Product Description is required";
        }
        if(this.state.price == "") {
            errors.price = "Product price is required";
        }

        if(this.state.ratings == "") {
            errors.ratings = "Product rating is required";
        }
        return errors;
    },

    render: function() {
        return (
            <div className="product-profile">
            {this.getHeader()}
                <form ref='product_form' onSubmit={this.onSubmit}>
                    <div className="product-detail">
                       <label>
                          <span class="product-label"> Name:</span>
                          <input type="text" name="productName"  ref="productName" onChange={this._onChange}/>
                       </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span class="product-label"> Description:</span>
                            <input type="text" name="description"  ref="description" onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span class="product-label"> Price:</span>
                            <input type="text" name="price" ref="price" onChange={this._onChange} />
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span class="product-label"> SKU:</span>
                            <input type="text" name="sku" ref="sku" onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="product-detail">
                        <label>
                            <span class="product-label"> Ratings:</span>
                            <input type="text" name="ratings" ref="ratings" onChange={this._onChange}/>
                        </label>
                    </div>
                    <div className="form-controls">
                       <button type="submit" className="submit" >{this.getButtonText()}</button>
                       <button type="reset" className="reset">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default ProductForm;