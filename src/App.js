// import logo from './logo.svg';
import React from  'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
    {/* <Dinner/>
    */}
    
    <Dinner dishName="Niharri" sweetDish="Kheer"></Dinner>
    <br/>
    <Dinner dishName="Biryani" sweetDish="Jaleebi"></Dinner>
    <br/>
    <Dinner dishName="Karahi" sweetDish="Gajar Ka Halwa"></Dinner>
    
    {/* <header className="App-header"> */}
    {/* <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
  </a> */}
  {/* <h1>Hello Good Every Thing</h1>
  </header> */}
  </div>
  );
}

export default App;
