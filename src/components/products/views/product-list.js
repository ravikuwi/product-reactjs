import React from 'react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';



export default function(props) {
    return (
        <div className="data-list">

        <div className="product-header">
            <div className="product-id-header"> Name</div>
            <div className="product-price-header">Price</div>
            <div className="product-rating-header">Rating</div>
        </div>

        {props.products.map(product => {

                return (
                    <div key={product.id} className="data-list-item">
                        <div className="details">
                            <Link to={'/products/' + product.id} className="product-id btn btn-link" >{product.name}</Link>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">

                                <StarRatingComponent
                                    name="prodRating"
                                    editing={false}
                                    starCount={5}
                                    value={product.ratings}
                                />
                            </div>
                        </div>
                        <div className="controls">
                            <Link  className="edit btn btn-primary btn-sm"    to={'/edit/'+product.id}>Edit</Link>
                            <button  onClick={props.deleteProduct.bind(null, product.id)} className="delete btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}