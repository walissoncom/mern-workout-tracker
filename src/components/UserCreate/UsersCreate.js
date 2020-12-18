import React, { Component } from 'react';

export default class UserCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.userInput = React.createRef();

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            ref={this.userInput}
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}