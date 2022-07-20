import React from "react";

const Finder2 = () => {
  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <input></input>
      <button></button>
    </form>
  );
};

export default Finder2;
