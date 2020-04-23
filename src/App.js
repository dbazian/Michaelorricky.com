import React from 'react';
import './App.css';
import Mike from "./Images/Michael.jpg";
import Ricky from "./Images/Ricky.jpg";
import RandomQuestion from './RandomQuestion';

function App() {
  return (
    <div className="app">
      <h1>Who Said It? Michael Scott or Ricky</h1>
      <div className="row-container">
      <img className="mike" src={Mike} alt="Michael Scott"></img>
      <img className="ricky" src={Ricky} alt="Ricky"></img>
      </div>
       <RandomQuestion />
    </div>
  );
}

export default App;