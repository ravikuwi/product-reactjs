import React from 'react';
import { Link } from 'react-router';


export default function(props) {
    return (
        <div className="data-list">

            {props.products.map(product => {

                return (
                    <div key={product.id} className="data-list-item">
                        <div className="details">
                            <Link to={'/products/' + product.id}>{product.name}</Link>
                            <span>&nbsp; &nbsp; Price: &nbsp;{product.price}</span>
                        </div>
                        <div className="controls">
                            <button  className="edit">Edit</button>
                            <button  className="delete">Delete</button>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}