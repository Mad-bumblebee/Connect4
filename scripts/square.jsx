import React from 'react';
import './style.css';

 export default class Square extends React.Component {
    render() {
      return (
      <div style = {{display: 'inline-block'}} onClick={() => this.props.onClick()}>{this.props.value}</div>);        
    }
  }