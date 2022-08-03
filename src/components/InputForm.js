import React, { useState } from 'react';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  console.log(title, author);
  return (
    <div className="input-container">
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          placeholder="Add Book..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author..."
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
