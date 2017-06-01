import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Cafe from './views/cafes';
import Top from './views/top';
import AddNew from './views/addNew';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenIndex: 1
        }
    }


    render() {
        return (
            <div className="app">
                <div className="app-header"></div>
                <div className="app-wrapper">
                    <Navigation/>
                    <div className="main-content">
                        {/*{this.props.children}*/}
                        <Cafe/>
                    </div>
                </div>
                

            </div>
        )
    }
};

export default App;