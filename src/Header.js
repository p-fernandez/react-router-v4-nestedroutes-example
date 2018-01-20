import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => ({
  render() {
    return (
      <div className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Router V4 implementing nested children</h2>
      </div>
    );
  }
});

export default Header;
