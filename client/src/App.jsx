import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFoundPage";
import { TaskForm } from "./pages/TaskForm";
import { TasksPage } from "./pages/TasksPage";
import { Navbar } from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div className="bg-blue-200 h-screen">
      <Navbar />
      <div className="container m-auto w-11/12">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
