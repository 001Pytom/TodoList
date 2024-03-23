import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function getInputText(e) {
    const newInputText = e.target.value;
    setInputText(newInputText);
  }

  function displayTodo() {
    setItems((prevItems) => [...prevItems, inputText]  );
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getInputText} value={inputText} />
        <button onClick={displayTodo}>
          <span>Add </span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
