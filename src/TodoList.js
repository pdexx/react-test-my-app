import React from 'react';
import './TodoList.css';
// import PropTypes from 'prop-types';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    handlerKeyUp(e) {
        if (e.keyCode === 13) {
            let value = e.target.value;
            if (!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.state.todos.push(newTodoItem)
            this.setState({ todos: this.state.todos });  //修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
        }
    }
    render() {
        return (
            <div className="todo-input">
                <input type="text" placeholder="請輸入代辦事項" onKeyUp={this.handlerKeyUp.bind(this)} />
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <li key={index}>第{index+1}件事: {todo.text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// TodoList.propTypes = {};

export default TodoList;
