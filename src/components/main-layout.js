
import React from 'react'


var MainLayout = React.createClass({

    render:function(){
        return(
            <div className="app">
                <header className="primary-header"></header>
                <aside className="primary-aside"> </aside>
                <main>
                    {this.props.children}
                </main>
            </div>

        );
    }


});

export default  MainLayout;