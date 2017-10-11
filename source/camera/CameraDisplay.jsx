import React, { Component } from 'react';

class CameraDisplay extends Component {
  componentDidUpdate() {
    this.videoEl.srcObject = this.props.stream;
    this.videoEl.play();
  }
  render() {
    return (
      <video ref={c => this.videoEl = c} width="300" height="300" />
    );
  }
}

export default CameraDisplay;