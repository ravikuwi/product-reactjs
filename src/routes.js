import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import ProductProfile from './components/products/views/product-profile'
import ProductListContainer from './components/products/product-list-container'


export default (
    <Router history={hashHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />

            <Route path="products">
                <Route component={SearchLayout}>
                    <IndexRoute component={ProductListContainer} />
                </Route>
                <Route path=":productId" component={ProductProfile} />
            </Route>

        </Route>
    </Router>
);