import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import ListRepo from "./components/ListRepo";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description of Task 2",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não preciso atualizar
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-500px">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <ListRepo />
      </div>
    </div>
  );
}

export default App;
