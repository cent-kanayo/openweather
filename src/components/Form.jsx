import React from "react";

const Form = ({ handleChange, handleSubmit, city }) => {
  return (
    <div className="w-1/2 bg-gray-500 shadow-md hover:shadow-lg mx-auto mt-10 p-10">
      <form className="flex w-6 " onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          className="outline-none p-4 focus:true rounded-md"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
