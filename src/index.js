import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Hello from './Hello';
// import TextAeraCounter from './TextAeraCounter';
// import TodoList from './TodoList';
// import TodoApp from './TodoApp';
// import MyTestState from './MyTestState';
// import Clock from './Clock'
import NameCard from './NameCard'
import registerServiceWorker from './registerServiceWorker';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


ReactDOM.render((
<div>
<App />
<NameCard />
{/* <ScrollAnimation animateIn="bounce">
<Hello name="Bob"/>
<Hello name="Mary"/>
</ScrollAnimation>
<ScrollAnimation animateIn="jello">
<TextAeraCounter />
<TodoList />
<TodoApp />
<MyTestState />
<Clock />
</ScrollAnimation> */}
</div>

)
    
, document.getElementById('root'));
registerServiceWorker();
