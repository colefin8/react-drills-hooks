import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <p>{input}</p>
      <input onChange={e => setInput(e.target.value)} value={input} />
    </div>
  );
}

export default App;
