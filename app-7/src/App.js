import React, { useState } from "react";
import List from "./Components/List";
import NewTask from "./Components/NewTask";

const App = () => {
  const [list, changeList] = useState([]);

  const addToList = input => {
    changeList([...list, input]);
  };

  return (
    <div>
      <NewTask addToList={addToList} />
      <List list={list} />
    </div>
  );
};

export default App;
