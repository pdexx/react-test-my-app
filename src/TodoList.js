import React, { Component } from 'react';
import './TodoList.css';
// import PropTypes from 'prop-types';

class TodoList extends Component {
    constructor(props) { //ES6寫法繼承原件屬性
        super(props);
        this.state = { //宣告一個state內容是叫作todos的陣列
            todos: []
        };
        this.handlerKeyUp = this.handlerKeyUp.bind(this);
    }
    handlerKeyUp(e) { //靜態方法監聽keyCode13是否被按(enter)
        if (e.keyCode === 13) {
            let value = e.target.value; //值等於目前input輸入的值
            if (!value) {return false;} //如果值為空return false結束handlerKeyUp
            let newTodoItem = { //產生一個newTodoItem物件 字為輸入值 完成為否
                text: value,
                isDone: false
            };
            e.target.value = ''; //清空輸入欄位
            this.state.todos.push(newTodoItem) //將newTodoItem物件放到todos[]陣列內
            this.setState({ todos: this.state.todos });  //***修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。***
        }

    }
    render() {
        return (
            <div className="todo-input">
                <input type="text" placeholder="請輸入代辦事項" onKeyUp={this.handlerKeyUp} /> 
                {/* onKeyUp觸發handlerKeyUp */}
                <ul>
                    {this.state.todos.map((todo, index) => { 
                        {/* 用.map(()=>{})回傳整個todo陣列 */}
                        return (
                            <li key={index}>第{index+1}件事情: {todo.text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// TodoList.propTypes = {};

export default TodoList;
