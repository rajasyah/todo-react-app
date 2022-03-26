import React, { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setList([...list, input]);
    }

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Todo"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">Add</button>
      </form>
      <List todo={list} />
    </div>
  );
};

export default TodoList;
