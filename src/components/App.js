import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./inputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function getInputText(e) {
    const newInputText = e.target.value;
    setInputText(newInputText);
  }

  function displayTodo() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }

  function deletItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        getInputTextFunc={getInputText}
        inputTextValue={inputText}
        displayTodoFunc={displayTodo}
      />

      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={item}
                onchecked={deletItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
