import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="mainDiv">
      <input
        className="typeAny"
        placeholder="Type here..."
        type="text"
        onChange={(e) => setToDo(e.target.value)}
        value={toDo}
      />
      <i
        onClick={() => {
          if (toDo.trim()) {
            setToDos([...toDos, toDo]);
            setToDo(""); 
          }
        }}
        className="fa-solid fa-plus"
      ></i>
      <div className="box">
        <p className="title">To Dos..</p>

      
        {toDos.map((value, index) => {
          return (
            <div className="toDoSet" key={index}>
              <input id={`todo-${index}`} type="checkbox" className="check" />
              <label htmlFor={`todo-${index}`} className="toDo">
                {value}
              </label>
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setToDos(toDos.filter((_, i) => i !== index)); 
                }}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
