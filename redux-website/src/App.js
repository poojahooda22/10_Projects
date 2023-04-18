
import React from "react"
import Navbar from './Navbar';
import Shop from './Shop';


function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Shop/>
      </div>      
    </>
  );
}

export default App;
