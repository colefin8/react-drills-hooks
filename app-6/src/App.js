import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const App = () => {
  const [list, changeList] = useState([]);
  const [input, changeInput] = useState("");

  const removeItem = index => {
    list.splice(index, 1);
  };
  console.log(input);
  console.log(list);
  return (
    <div>
      <input onChange={e => changeInput(e.target.value)} value={input} />
      <button
        onClick={() => {
          changeList([...list, input]);
          changeInput("");
        }}
      >
        Add item
      </button>
      {list.map((e, i) => {
        return <Todo item={e} index={i} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default App;
