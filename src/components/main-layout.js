
import React from 'react'
import {Link} from 'react-router'


var MainLayout = React.createClass({

    render:function(){
        return(
            <div className="app">
                <header className="primary-header"></header>
                <aside className="primary-aside">
                            <Link to="/" activeClassName="active">Home</Link>
                            <Link to="/products" activeClassName="active">Products</Link>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>

        );
    }


});

export default  MainLayout;