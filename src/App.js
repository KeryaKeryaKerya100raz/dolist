import React, { useState } from "react";
import Header from "./components/Header";
import Active from "./components/Active";



function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '',
      status: true
    }

  ])
  
  return (
    <div className="App">
     <Header todo={todo} setTodo={setTodo}/>
     <Active todo={todo} setTodo={setTodo} />
    
    </div>
  );
}


export default App;
