import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };
    render() {
        return (
            <form
                style={{
                    display: 'flex',
                    marginTop: '12px',
                    marginBottom: '12px'
                }}
                onSubmit={this.onSubmit}
            >
                <input
                    value={this.state.title}
                    type="text"
                    name="title"
                    placeholder="Add Todo"
                    style={{ flex: '10', padding: '5px' }}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '2' }}
                />
            </form>
        );
    }
}

export default AddTodo;
