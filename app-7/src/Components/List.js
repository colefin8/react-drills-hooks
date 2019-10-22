import React from "react";
import ToDo from "./ToDo";

const List = props => {
  return (
    <div>
      <h1>To Do</h1>
      {props.list.map((e, i) => {
        console.log("mapping...");
        return <ToDo key={i} item={e} />;
      })}
    </div>
  );
};

export default List;
