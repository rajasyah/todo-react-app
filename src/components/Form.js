import React from "react";

const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <input
        className="w-9/12 sm:w-5/6 md:10/12 rounded-sm bg-black text-white px-2 py-1 focus:outline-none"
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={input}
      />
      <button
        className="rounded-md px-2 py-1 ml-3 text-white bg-black "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
