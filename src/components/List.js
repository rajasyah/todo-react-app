import React from "react";

const List = ({ todos, setList }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className="flex justify-between bg-black border-2 pl-2 mb-4 text-white font-mono "
          key={todo.id}
        >
          {todo.completed ? (
            <p className="line-through">{todo.text}</p>
          ) : (
            todo.text
          )}
          <div className="">
            <button
              onClick={() =>
                setList(
                  todos.map((item) => {
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        completed: !item.completed,
                      };
                    }
                    return item;
                  })
                )
              }
              className="bg-green-600 px-2"
            >
              &#10003;
            </button>
            <button
              onClick={() => setList(todos.filter((el) => el.id !== todo.id))}
              className="bg-red-600 px-2"
            >
              &#9747;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
