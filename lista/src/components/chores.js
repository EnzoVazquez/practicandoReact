import { useState } from "react";

export default function Chores({ item, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick(e) {
      onUpdate(item.id, newValue);
      setEdit(false);
    }
    return (
      <form className="edit" onSubmit={handleSubmit}>
        <input
          type="text"
          className="updateInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="editButton" onClick={handleClick}>
          editar
        </button>
      </form>
    );
  }

  function ToDoElement() {
    return (
      <div key={item.id} className="chore">
        <span className="toDoTitle">
        {item.title}
        </span>
        <button onClick={() => setEdit(true)} className="editButton">editar</button>
        <button onClick={() => onDelete(item.id)} className="deleteButton">borrar</button>
      </div>
    );
  }
  return (
    <div>
      <div className="">{edit ? <FormEdit /> : <ToDoElement />}</div>
    </div>
  );
}
