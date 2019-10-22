import React, { useState } from "react";

const NewTask = props => {
  const [input, changeInput] = useState("");

  const updateInput = value => {
    changeInput(value);
  };

  return (
    <div>
      <input
        placeholder="new task"
        onChange={e => updateInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          props.addToList(input);
          changeInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default NewTask;
