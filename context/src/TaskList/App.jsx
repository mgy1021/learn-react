import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TasksProvider from "./TasksProvider";

export default function TaskApp() {

  return (
    <>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider >
    </>
  );
}

