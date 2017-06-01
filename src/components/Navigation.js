import React, { Component } from 'react';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="app-nav">
                <div
                    className={this.props.viewIndex === "homepage" ? "nav-item homepage active-nav" : "nav-item homepage"}
                    onClick={() => { this.props.eventEmitter.emit('navigateView', { viewIndex: 'homepage' })}}>
                    <p>Avaleht</p>
                </div>
                <div
                    className={this.props.viewIndex === "posts" ? "nav-item posts active-nav" : "nav-item posts"}
                    onClick={() => { this.props.eventEmitter.emit('navigateView', { viewIndex: 'posts' })}}>
                    <p>Postitused</p>
                </div>
                <div
                    className={this.props.viewIndex === "addPost" ? "nav-item addPost active-nav" : "nav-item addPost"}
                    onClick={() => { this.props.eventEmitter.emit('navigateView', { viewIndex: 'addPost' })}}>
                    <p>Lisa postitus</p>
                </div>
                <div
                    className={this.props.viewIndex === "register" ? "nav-item register active-nav" : "nav-item register"}
                    onClick={() => { this.props.eventEmitter.emit('navigateView', { viewIndex: 'register' })}}>
                    <p>Registreeri</p>
                </div>
                <div
                    className={this.props.viewIndex === "login" ? "nav-item login active-nav" : "nav-item login"}
                    onClick={() => { this.props.eventEmitter.emit('navigateView', { viewIndex: 'login' })}}>
                    <p>Logi sisse</p>
                </div>
            </div>
        )
    }
}

export default Navigation;