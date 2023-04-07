import TaskCard from "./TaskCard"
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react"


function TaskList() {
  const {tasks} = useContext(TaskContext)
  
  return <div className=" grid grid-cols-4 gap-2">
    {tasks.map((task)=>{ 
        return <TaskCard key ={task.id} task={task} />
    })} 
  </div>
}

export default TaskList;
