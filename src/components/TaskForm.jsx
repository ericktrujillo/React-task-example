import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const onSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle("")
    setDescription("")
  };

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const onChangeArea = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className=" max-w-md mx-auto"> 
      <form onSubmit={onSubmit} className=" bg-slate-800 p-10 mb-4 ">
      <h1 className=" text-2x font-bold text-white mb-3  ">Crea tu tarea</h1>
      <input
        placeholder="Escriba tarea"
        onChange={onChangeInput}
        value={title}
        className=" bg-slate-300 p-3 w-full mb-2"
      ></input>

      <textarea
        placeholder="Escriba desc. de tarea"
        onChange={onChangeArea}
        value={description}
        className=" bg-slate-300 p-3 w-full mb-2"
      ></textarea>

      <button className=" bg-indigo-500 px-3 py-1 text-white w-full">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
