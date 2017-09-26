import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import TextAeraCounter from './TextAeraCounter';
import TodoList from './TodoList';
import TodoApp from './TodoApp';
import MyTestState from './MyTestState';
import Clock from './Clock'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<div>
<App /> 
{/* <Hello name="Bob"/>*/}
<Hello name="Mary"/>
<TextAeraCounter />
{/* <TodoList /> */}
<TodoApp />
<MyTestState />
<Clock />
</div>

)
    
, document.getElementById('root'));
registerServiceWorker();
