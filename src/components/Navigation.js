import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="app-nav">
                <div className="nav-item button-1">
                    <p>Avaleht</p>
                </div>
                <div className="nav-item button-2">
                    <p>Restoranid</p>
                </div>
                <div className="nav-item button-3">
                    <p>Top 10</p>
                </div>
                <div className="nav-item button-3">
                    <p>Registreeri</p>
                </div>
                <div className="nav-item button-3">
                    <p>Logi sisse</p>
                </div>
            </div>
        )
    }
}

export default Navigation;