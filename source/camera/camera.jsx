import React, { Component } from 'react';
import CameraDisplay from './CameraDisplay';
import CameraControls from './CameraControls';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoStream: null,
    };
  }
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(videoStream => this.setState({ videoStream }));
  }
  render() {
    return (
      <div className="camera">
        <CameraDisplay stream={this.state.videoStream} />
        <CameraControls />
      </div>
    );
  }
}

export { Camera };
