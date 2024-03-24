import React from "react";

function InputArea(props) {
  return (
    <div className="form">
    <input type="text" onChange={props.getInputTextFunc} value={props.inputTextValue} />
    <button onClick={props.displayTodoFunc}>
      <span>Add </span>
    </button>
  </div>  );
}

export default InputArea;
