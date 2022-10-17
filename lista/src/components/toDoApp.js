import { useState } from "react";
import Chores from "./chores.js";
import './toDoApp.css'

export default function ToDoApp() {
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...toDo];
    //unshift agrega elementos al inicio del arreglo
    temp.unshift(newToDo);
    setToDo(temp);

    setTitle('');
  }

  function handleUpdate(id, value) {
    const temp = [...toDo];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDo(temp);
  }

  function handleDelete(id) {
    const temp = toDo.filter((item) => item.id !== id);
    setToDo(temp);
  }
  return (
    <div className="toDoContainer">
      <h1>LISTA DE TAREAS</h1>
      <form onSubmit={handleSubmit} className="createForm">
        <input
          onChange={handleChange}
          className="toDoInput"
          placeholder="agrega una tarea"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          className="buttonAdd"
          value="agregar"
        />
      </form>
      <div className="tareasContainer">
        {toDo.map((item) => (
          <Chores
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
