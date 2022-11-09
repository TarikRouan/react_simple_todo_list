import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import React from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addTask">Add Task</label>
      <input
        autoFocus
        ref={inputRef}
        id="addTask"
        type="text"
        placeholder="Add Task"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
