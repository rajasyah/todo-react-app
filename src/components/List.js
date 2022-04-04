import React from "react";
import Swal from "sweetalert2";

const List = ({ todos, setList }) => {
  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className={`flex justify-between ${
            todo.completed ? "bg-green-900 line-through" : "bg-black"
          }  border-2 pl-2 mb-4 rounded-sm text-white font-mono`}
          key={todo.id}
        >
          {capitalize(todo.text)}
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
              onClick={() => {
                Swal.fire({
                  title: "Do you want to delete todo ?",
                  showDenyButton: true,
                  confirmButtonText: "Delete",
                  denyButtonText: `Don't delete`,
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    Swal.fire("Delete!", "", "success");
                    setList(todos.filter((el) => el.id !== todo.id));
                  } else if (result.isDenied) {
                    Swal.fire("Changes are not delete", "", "info");
                  }
                });
              }}
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
