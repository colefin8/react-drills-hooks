import React, { useState } from "react";

const App = () => {
  const [username, changeUsername] = useState(""),
    [password, changePassword] = useState("");

  return (
    <div>
      <input
        placeholder="username"
        onChange={e => changeUsername(e.target.value)}
        value={username}
      />
      <input
        placeholder="password"
        onChange={e => changePassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() =>
          window.alert(`Username: ${username}, Password: ${password}`)
        }
      >
        Login
      </button>
    </div>
  );
};

export default App;
