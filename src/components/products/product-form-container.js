import React from 'react';
import * as productApi from './api/product-api'
import {Link} from 'react-router'
import ProductForm from './views/product-form'
import store from '../../store'
import { connect } from 'react-redux'
import { addProduct} from './actions/product-form-actions'

const ProductFormContainer = React.createClass({

    getInitialState: function () {
        return {product:{id:"", productName: "", description: "", price: "", sku: "", ratings:"", updateProduct:false, errors: {},currentHeader:"", message:""}}
    },


    componentDidMount:function(){
        if(this.props.params.productId) {
            productApi.getProductById(this.props.params.productId,true);
        }else{
            store.dispatch(addProduct());
        }
    },

    onSubmit:function(e){
        console.log("in submit");
        e.preventDefault();
        var errors = this.validate();
        if(Object.keys(errors).length != 0) {
            const product = this.state.product;
            product.errors=errors;
            this.setState({
                product,
            });
            return;
        }
        if(this.state.product.updateProduct){
            productApi.updateProduct({
                id:this.state.product.id,
                name:this.state.product.productName,
                description:this.state.product.description,
                price:this.state.product.price,
                sku:this.state.product.sku,
                ratings:this.state.product.ratings
            });
            const product = this.state.product;
            product.message="Updated the product Successfully.";
            this.setState({product,});
        }else {
            productApi.createProduct({
                name: this.state.product.productName,
                description: this.state.product.description,
                price: this.state.product.price,
                sku: this.state.product.sku,
                ratings: this.state.product.ratings
            });
            this.setState(this.getInitialState());
            const product = this.getInitialState().product;
            product.message="Added new product Successfully.";
            product.currentHeader="Add a new Product";
            this.setState({product,});
        }
    },



    getButtonText:function(){
        if(this.state.product.updateProduct){
            return "Update";
        }else{
            return "Submit";
        }
    },

    onChange: function (e) {
        const product = this.state.product;
        product[e.target.name] =  $.trim(e.target.value);
        this.setState({product,});
    },

    validate: function () {
        var errors = {}
        if(this.state.product.productName == "") {
            errors.name = "error";
        }
        if(this.state.product.description == "") {
            errors.description = "error";
        }
        if(this.state.product.price == "") {
            errors.price = "error";
        }
        if(this.state.product.sku == "") {
            errors.sku = "error";
        }
        if(this.state.product.ratings == "") {
            errors.rating = "error";
        }
        return errors;
    },


    render: function() {
        return (<ProductForm product={this.props.product}  onSubmit={this.onSubmit} onChange={this.onChange} validate={this.validate} getButtonText={this.getButtonText}/>);

    }
});

const mapStateToProps = function(store) {
    console.info("mapStateToProps",store);
    return {
        product: store.productProfile
    };
};

export default connect(mapStateToProps)(ProductFormContainer);