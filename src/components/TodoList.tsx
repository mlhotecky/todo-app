import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodos } from '../redux/actions'
import './TodoList.css'

class TodoList extends Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        console.log(this.props);

        const users = this.props.todos.map((todo, id) => {
            return (
                <div key={id} className="todos">
            <span className="todo-name">{todo.name}</span>
                <span className="todo-description">{todo.description}</span>
                </div>
        )
        });

        return (
            <>
                <div className="heading">User List</div>
        {users}
        <button onClick={this.props.deleteTodos}>Delete Users</button>
        <button onClick={this.props.getTodos}>Get Users</button>
        </>
    )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos()),
        deleteTodos: () => dispatch(deleteTodos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)