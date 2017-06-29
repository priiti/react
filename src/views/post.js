import React, { Component } from 'react';
// import { getGithubData } from './../services/Services';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getData() {
        // const url = 'https://api.github.com/users/priiti';
        // const data = getGithubData(url);
        const person = 'Priit';
        this.setState({ name: person });
    }

    render() {
        return (
            <div className="view">
                <h1>Postitused</h1>
                <button onClick={this.getData}>Vajuta</button>
                <div>{this.props.name}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quasi vel quod blanditiis magni, fugiat, cumque sequi eos, eveniet omnis quae? Labore modi qui architecto. Vel ipsum accusantium qui similique!</p>
            </div>
        )
    }
}

export default Posts;