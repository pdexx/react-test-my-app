import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
  render() {
    return (
          (this.props.name)?
          <p className="Hello">Hello! {this.props.name}</p>:<p className="Hello">Hello! stranger</p>
    );
  }
}

export default Hello;