import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = props => ({
  render() {
    return (
      <div className="App">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default App;
