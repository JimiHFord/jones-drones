// @flow
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Shell extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className="appShell">
        <div style={{ minHeight: "calc(100vh - 225px)" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
