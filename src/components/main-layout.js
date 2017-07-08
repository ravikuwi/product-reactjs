
import React from 'react'
import {Link} from 'react-router'


var MainLayout = React.createClass({

    render:function(){
        return(
            <div className="app">
                <header className="primary-header"></header>
                <aside className="primary-aside">
                            <Link to="/" activeClassName="active btn btn-info btn-sm" className="btn btn-info btn-nav btn-sm">Home</Link>
                            <Link to="/products" activeClassName="active btn btn-info btn-sm" className="btn btn-info btn-nav btn-sm">Products</Link>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>

        );
    }


});

export default  MainLayout;