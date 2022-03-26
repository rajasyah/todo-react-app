import React from "react";

const List = ({ todo }) => {
  return (
    <div>
      <ul>
        {todo.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
