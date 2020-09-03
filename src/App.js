import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Router from './components/Router';

class App extends React.Component {
  render() {
    return (
      <div>
      {/* <NavBar /> */}
      <Router />
      {/* <Footer /> */}
    </div>
    );
  }
}

export default App;
