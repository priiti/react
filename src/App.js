import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Navigation from './components/Navigation';
import Homepage from './views/homepage';
import Posts from './views/post';
import AddPost from './views/addPost';
import Register from './views/register';
import Login from './views/login';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewIndex: 'homepage'
        }
    }

    componentWillMount() {
        this.eventEmitter = new EventEmitter();
        this.eventEmitter.addListener('navigateView', ({ viewIndex }) => {
            this.updateScreen({ newViewIndex: viewIndex });
        })
    }

    updateScreen({ newViewIndex }) {
        this.setState({ viewIndex: newViewIndex });
    }

    render() {

        let activeView;

        switch (this.state.viewIndex) {
            case 'homepage':
                activeView = <Homepage />
                break;
            case 'posts':
                activeView = <Posts />
                break;
            case 'addPost':
                activeView = <AddPost />
                break;
            case 'register':
                activeView = <Register />
                break;
            case 'login':
                activeView = <Login />
                break;
            default:
                break;
        }
        
        return (
            <div className="app">
                <div className="app-header"></div>
                <div className="app-wrapper">
                    <Navigation 
                        eventEmitter={this.eventEmitter}
                        viewIndex={this.state.viewIndex}/>
                    <div className="main-content">
                        {/*{this.props.children}*/}
                        { activeView }
                    </div>
                </div>
                

            </div>
        )
    }
};

export default App;