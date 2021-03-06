import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ResponsiveColumn index={0}>
          {LOREM_IPSUM.repeat(10)}
        </ResponsiveColumn>
        <ResponsiveColumn index={1}>
          {LOREM_IPSUM.repeat(10)}
        </ResponsiveColumn>
      </div>
    );
  }
}

const ResponsiveColumn = styled.p`
  text-align: ${({ index }) => index % 2 == 0 ? 'right' : 'left'};
  float: left;
  width: 50%;
  padding: 16px 32px;
  box-sizing: border-box;
`;

export default App;
