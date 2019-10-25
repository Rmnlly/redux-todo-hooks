import React, { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  const handleAddTodo = () => console.log("oh hi");
  return (
    <div>
      <input onChange={e => setText(e.target.value)} value={text} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
