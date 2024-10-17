import React, { useState } from "react";
import './App.css';
import Task1 from "../src/Component/Task1"
import Task2 from "../src/Component/Task2"
import Task3 from "../src/Component/Task3"
import Task4 from "../src/Component/Task4"

function App (){
  const [name, setName] = useState("")
  const getData = (item) =>{
    setName(item)
  }
  const data = [
    {
      name: "Item 1",
      children: [
        {
          name: "Subitem 1.1",
          children: [
            { name: "Subsubitem 1.1.1", children: [] },
            { name: "Subsubitem 1.1.2", children: [] },
          ],
        },
        { name: "Subitem 1.2", children: [] },
      ],
    },
    {
      name: "Item 2",
      children: [
        { name: "Subitem 2.1", children: [] },
        { name: "Subitem 2.2", children: [] },
      ],
    },
  ];
    return(
       <>
          <div className="sepration">
          <h1>Task1</h1>
          <Task1 /> 
          </div>
          <div className="sepration">
          <h1>Task2</h1>
          <h2>fetch nested object</h2>
          <Task2 data={data}/>
          </div>
          <div className="sepration">
          <h1>Task3</h1>
          <h2>I am parent Component</h2>
          <Task3 getData={getData} />
          <h3>Submitted Name: {name}</h3>
          </div>
          <div className="sepration">
          <h1>Task4</h1>
          <Task4/>
          </div>
       </>
    )
  }

export default App;
