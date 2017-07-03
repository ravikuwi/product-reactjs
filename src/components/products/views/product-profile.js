import React from 'react';

const ProductProfile = React.createClass({
    render: function() {
        return (<h1>Details for Product Id: {this.props.params.productId}</h1>);
    }
});

export default ProductProfile;