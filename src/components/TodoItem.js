import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: '#f4f4f4',
            marginTop: '12px'
        };
    };

    render() {
        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(
                        this,
                        this.props.todo.id
                    )}
                />{' '}
                {'    '}
                {this.props.todo.title}
                <button
                    style={btnStyle}
                    onClick={this.props.delTodo.bind(this, this.props.todo.id)}
                />
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;
