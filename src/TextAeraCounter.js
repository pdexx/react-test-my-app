import React, { Component } from 'react';

// import './App.css';

class TextAeraCounter extends Component {
  render() {
    return (
       <div>
           <textarea>{this.props.text}</textarea>
           <h3>{this.props.text.length}</h3>
       </div>
    );
  }
}

export default TextAeraCounter;
