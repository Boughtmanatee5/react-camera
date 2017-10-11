import React, { Component } from 'react';
import CameraDisplay from './CameraDisplay.jsx';

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
    return (<CameraDisplay stream={this.state.videoStream} />);
  }
}

export { Camera };
