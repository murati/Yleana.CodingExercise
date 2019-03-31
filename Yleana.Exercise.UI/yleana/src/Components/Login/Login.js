import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    onEmailChangedHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChangedHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    onLoginHandler = () => {
        if (this.state.email !== "" && this.state.password !== "")
            this.props.history.push('/titles');
        else
            alert("Please provide demo information");
    }

    render() {
        return <div className="justify-content-center d-flex">
            <div className="col-md-4">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" value={this.state.email} onChange={this.onEmailChangedHandler} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onPasswordChangedHandler} placeholder="Password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onLoginHandler}>Login</button>
                </div>
            </div>
        </div>
    }
}

export default Login;