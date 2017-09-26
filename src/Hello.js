import React, { Component } from 'react';
import PropTypes from 'prop-types'; //輸入型別檢查1.55後獨立包成prop-types
import './Hello.css';
class Hello extends Component {
  
  
  static propTypes = {//型別檢查 字串 必填
    name: PropTypes.string.isRequired,
  }
  
  render() {
    return (
          (this.props.name)?
          <p className="Hello">Hello! {this.props.name}</p>:<p className="Hello">Hello! stranger</p>
    );
  }
}


export default Hello;