import React, { useState, useEffect } from "react";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [jsonValue, setValue] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:5000/api/one/test");
    if(res.ok)
    res
      .json()
      .then(res => setValue(res))
      .catch(err => setErrors(err));
  }

  //async function fetchAsync () { drugi nacin
    //let response = await fetch('http://localhost:5000/api/one/test');
    // only proceed once promise is resolved
    //let data = await response.json();
    //return setValue(data);
  //}

  // ovako se koristi map.nesto

//  myArray = [1,2,3,4];
//
//myArray.map(element => {
 // return element + 1;
//});
 // useEffect(() => {
  //  fetchData();
 // });
//      <span>{JSON.stringify(jsonValue)}</span> line 22
  return (
    <div>
      <div style={{backgroundColor: "blue"}}>.</div><br />

      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
      <hr />
      <span>{jsonValue._id}</span>
      <button onClick={fetchData()}> Govedo </button>
      {
        jsonValue.map( jsonItem =>{
        return <table style ={{border: "3px solid blue"}}> <li><input type="checkbox" id={jsonItem._id}></input>User: {jsonItem.username} has items: {jsonItem.todo}</li> </table>
          })
      }
    </div>
  );
};
export default App;