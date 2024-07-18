import './App.css';
import { useState } from 'react';

function App() {

  //File and Folder Naming Convention
  //file_name.test.js
  //file_name.spec.js
  //file_name.spec.jsx
  //__tests__ ->This Folder For all test files. No need to give .test extension

  const [data,setData]=useState("");
  return (
    <div className="App">
      {/*
      Case 1
      <p>First React Test Case</p>
      <input type="text" placeholder='Enter User Name' name='username' id="userid"/>

      Case 2
      <img 
      title='AI Generated Image'
      src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='k'/>

      Case 3
      <h1>Test OnChange Event with Input Text</h1>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>

      Case 4
      <p>Test Click Event with Button</p>
      <button onClick={()=>setData("updated data")}>Update Data</button>
      <h1>{data}</h1>
      
      Case 5
      <h1>Snapshot Testing</h1>
      <button onClick={()=>setData("hello")}>Update Data</button>
      <h1>{data}</h1>*/}
    </div>
  );
}

export default App;

// What should we test?

// 1) Testing Component Rendering
// 2) UI elements that we write
// 3) Functions which we write
// 4) API testing
// 5) Event testing
// 6) Props and states
// 7) UI condition testing

// Avoid Testing for

// 1) External UI library code.
// 2) No need to test default function of JS and react
// 3) Sometime we should mock function rather testing it in details.

// Important Points

// 1) Do not write snapshots in starting of the project.
// 2) Run test case after completing your functionality.
// 3) Make a standard for code coverage.
