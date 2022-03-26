import React from "react";

const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <input
        className="w-3/4 bg-black text-white px-2 py-1 focus:outline-none"
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={input}
      />
      <button className=" px-2 py-1 ml-3 text-white bg-black " type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
