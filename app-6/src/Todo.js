import React from "react";

const Todo = props => {
  return (
    <div>
      <button onClick={() => props.removeItem(props.index)}>Remove</button>
      <li>{props.item}</li>
    </div>
  );
};

export default Todo;
