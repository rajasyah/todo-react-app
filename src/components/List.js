import React from "react";

const List = ({ todos, setList }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className="flex justify-between border-2 pl-2 mb-4 text-white font-mono "
          key={todo.id}
        >
          {todo.completed ? "Complete" : todo.text}
          <button
            onClick={() => setList(todos.filter((el) => el.id !== todo.id))}
            className="bg-black px-2"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
