import React, { useState } from "react";
import Form from "./Form";
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
      setList([
        ...list,
        { text: input, completed: false, id: Math.random() * 1000 },
      ]);
    }

    setInput("");
  };

  return (
    <div className="h-3/4 w-1/4 bg-orange-800 p-5 shadow-amber-900 shadow-lg rounded-sm">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
      />
      <List todos={list} setList={setList} />
    </div>
  );
};

export default TodoList;
