import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <div className="Button">
        <div className="btn btn-primary mt-1"> Submit </div>{' '}
      </div>
    );
  }
}

export default Button;
