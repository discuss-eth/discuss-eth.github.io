import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PageRouter from './PageRouter';

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Nav/>

        <main style={{ flexGrow: 1 }}>
          <PageRouter/>
        </main>

        <Footer/>
      </div>
    );
  }
}