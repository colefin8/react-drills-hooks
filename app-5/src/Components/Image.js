import React from "react";

const Image = props => {
  return (
    <img
      alt="Really Big Shrek"
      src={props.src}
      style={{ height: "10000px", width: "10000px" }}
    />
  );
};

export default Image;
