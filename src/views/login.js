import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="view">
                <h1>Logi sisse</h1>
                <form>
                    <label>
                        Nimi:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Parool:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Logi sisse" />
                </form>
            </div>
        )
    }
}

export default Login;