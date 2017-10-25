import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/forums">
              Forums
            </Link>
          </li>
          <li>
            <Link to="/threads">
              Threads
            </Link>
          </li>
          <li>
            <Link to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}