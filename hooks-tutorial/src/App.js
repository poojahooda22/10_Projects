import React, {useState} from "react";
import './App.css';

function App() {

  // const[name, setName] = useState();
  const[fullName, setFullName] = useState( {
    fName: "",
    lName: "",
  });
  // const[lastName, setLastName] = useState();
  // const[lastNameNew, setLastNameNew] = useState();

  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;
    
    setFullName( (preValue) => {
      if(name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };    
      } else if(name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };  
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted")
  }

  return (
    <div className="App">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <input className="form-control" type="text" 
      placeholder="Enter Your first Name"
      name="fName"
      onChange={inputEvent}
      value={fullName.fName}/>
      <br/>
      <input className="form-control" type="text" 
      placeholder="Enter Your last Name"
      name="lName"
      onChange={inputEvent}
      value={fullName.lName}/>
      <button className='btn btn-primary mb-2' onClick={onSubmit}> Click Me</button>
    </div>
  );
}

export default App;
