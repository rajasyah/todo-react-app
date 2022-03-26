import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-orange-900 text-3xl font-bold underline mb-5">
        Todo App
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
