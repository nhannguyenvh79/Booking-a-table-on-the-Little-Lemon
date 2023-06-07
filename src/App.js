import React,  { useState } from  "react";
import Footer from  './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
 // test
  const [number, setNumber] = useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }


  return (
    <>
    <div className="AppGrid"> 
      <Header />
      <Main />
      <Footer />      
    </div>
    <button data-testid="add-one" onClick={increment}>
      Add one
    </button>
    <h1 data-test-id="currentNumber">{number}</h1>   
  </>
  );
}

export default App;
