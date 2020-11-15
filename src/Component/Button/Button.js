import React, { Component, Fragment } from 'react';
import ScreenCapture from '../ScreenCapture/ScreenCapture';
import './Button.css';

class Button extends Component {
  state = {
    screenCapture: ''
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture
    })
  }

  render() {
    const { screenCapture } = this.state
    return (
      <div className="button">
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <Fragment>
            <button onClick={onStartCapture}>Capture</button>
            <img src={screenCapture} alt="screen"/>
          </Fragment>
        )}
      </ScreenCapture>
      </div>
    );
  }
}

export default Button;