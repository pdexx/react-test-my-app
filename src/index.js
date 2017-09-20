import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import TextAeraCounter from './TextAeraCounter';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<div>
<App /> 
<Hello name="Bob"/>
<Hello name=""/>
<TextAeraCounter />
<TodoList />
<TodoList />
</div>

)
    
    
    , document.getElementById('root'));
registerServiceWorker();
