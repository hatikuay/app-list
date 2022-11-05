import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './containers/List';
import AxiosExample from './AxiosExample';


function App() {
  return (
    <div className="container">
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>
      <List></List>
      <AxiosExample></AxiosExample>
    </div>
  );
}

export default App;
