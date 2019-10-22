import React, { useState } from "react";

const App = () => {
  const [input, changeInput] = useState(""),
    [list, changeList] = useState(["ban", "banana", "apple", "an apple"]);

  return (
    <div>
      {list.map((e, i) => {
        if (e.includes(input)) {
          return <h2 key={i}>{e}</h2>;
        }
      })}
      <input value={input} onChange={e => changeInput(e.target.value)} />
    </div>
  );
};

export default App;
