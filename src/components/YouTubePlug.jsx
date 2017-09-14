import React, { Component } from 'react';
import Letchworth from './youtube/Letchworth';

export default class YouTubePlug extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ minHeight: "50vh" }}>
          <div className="row">
            <p>
            See some of our work by visiting the Jones Drones Youtube channel.
            Even though this channel is fairly new, we have over 500 hours of experience flying unmanned aircraft systems both recreationally and commercially.
            </p>
          </div>
          <div className="row">
            <Letchworth />
          </div>
        </div>
      </div>
    )
  }
}