import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './containers/List';

function App() {
  return (
    <div className="container">
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>
      <List></List>
    </div>
  );
}

export default App;
