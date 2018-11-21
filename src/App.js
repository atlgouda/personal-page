import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainBody from './components/body/MainBody';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainBody />
        <Footer />
      </Fragment>
    );
  }
}

export default App;