import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header"></div>
                <div className="app-wrapper">
                    <div className="app-nav"></div>
                    <div className="main-content">
                        {this.props.children}
                    </div>
                </div>
                

            </div>
        )
    }
};

export default App;