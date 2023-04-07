import {tasks as data} from '../data/Task'
import { createContext } from "react";
import { useEffect,useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
    console.log(tasks);

    return () => {
      setTasks([]);
    };
  }, []);

  function createTask(obj){
    setTasks([...tasks,{  
      id :tasks.length,
      title : obj.title,
      description : obj.description
    } ])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId ))
  }

  const toPass = {
    tasks : tasks,
    createTask : createTask,
    deleteTask : deleteTask
  }

  return (
    <>
      <TaskContext.Provider value={toPass}>
        {props.children}
      </TaskContext.Provider>
    </>
  );
}

export default TaskContext;
