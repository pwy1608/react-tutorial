import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Contact />
        {/* <Header />
        <Body /> */}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
