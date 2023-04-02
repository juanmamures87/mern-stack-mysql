import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-lime-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>

      <span>{task.created_at}</span>
      <div className="flex gap-x-1 justify-end">
        <button
          className="bg-green-400 px-2 py-1 rounded-sm"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>

        <button
          className="bg-slate-400 px-2 py-1 rounded-sm"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-400 px-2 py-1 rounded-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
