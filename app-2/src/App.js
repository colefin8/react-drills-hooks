import React, { useState } from "react";

const App = () => {
  const [list, changeList] = useState(["One", "two", "three", "four"]);
  return (
    <div className="App">
      {list.map((e, i) => {
        return <h2 key={i}>{e}</h2>;
      })}
    </div>
  );
};

export default App;
