import React from 'react'
import {Link} from 'react-router'

var Home = React.createClass({
    render:function () {
        return(
            <div>
                <h1>Welcome to the Home Page</h1>
                <Link to="/products" activeClassName="active">Products</Link>
            </div>

        );
    }
})

export default Home;