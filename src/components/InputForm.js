import React from 'react';

const InputForm = () => (
  <div className="input-container">
    <h2>Add New Book</h2>
    <form>
      <input
        type="text"
        placeholder="Add Book..."
      />
      <input
        type="text"
        placeholder="Author..."
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default InputForm;
