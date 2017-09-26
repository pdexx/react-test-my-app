import React from 'react'
import TodoHeader from './TodoHeader'  // 引入TodoHeader组件
import TodoMain from './TodoMain'  // 引入TodoMain组件
import './TodoList.css';

class TodoApp extends React.Component { // 定义组件，继承父类
    //TodoApp是UI,TodoHeader是input,TodoMain是input後的顯示結果,TodoItem是每個item的內容與核選
  constructor() {
    super()
    this.state = { //初始化元件的起始狀態
      todos: []
    }
  }
  addTodo = (item) => { // 新增了添加todo事项的方法
    this.state.todos.push(item)
    this.setState({todos: this.state.todos});  //设置状态 不寫這行UI不會被觸發改變
  }
  render(){
    return (
      <div className="todo-wrapper todo-input">
        {/* // todo-input引用之前寫的css. 将原内容写在组件中并引入进行渲染
        // 把addTodo方法传递到TodoHeader组件中，bind(this)是为了把该React实例绑定到this上 */}
        <TodoHeader addTodo={this.addTodo}/>
        {/* // 把 state.todos 传入到TodoMain 中 */}
        <TodoMain todos={this.state.todos}/>
      </div>
    )
  }
}
export default TodoApp;