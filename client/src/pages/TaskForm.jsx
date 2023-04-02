import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";

export const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
            setTask({
              title: "",
              description: "",
            });
            navigate("/");
          } else {
            await createTask(values);
            actions.resetForm();
            navigate("/");
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-500 rounded-md max-w-md mx-auto p-4 mt-10"
          >
            <h1 className="text-xl font-bold text-center">
              {params.id ? "EDIT TASK" : "CREATE TASK"}
            </h1>

            <label htmlFor="tit">Title</label>
            <br />
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              id="tit"
              name="title"
              placeholder="Title"
              required
              onChange={handleChange}
              value={values.title}
            />

            <br />
            <br />

            <label htmlFor="des">Description</label>
            <br />
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              id="des"
              name="description"
              placeholder="Description"
              rows={3}
              onChange={handleChange}
              value={values.description}
            />
            <br />
            <br />
            <button
              className="bg-indigo-500 rounded-sm px-2 py-1 w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
