import { useImmerReducer } from "use-immer";
import React from "react";
import { useState, useRef } from "react";
import "./taskApp.css";

function tasksReducer(draft, action) {
  switch (action.type) {
    case "added":
      return draft.push({
        id: draft.length + 1,
        text: action.text,
        done: false,
      });
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "delete":
      return draft.filter((t) => t.id !== action.id);
    default:
      throw Error("Unknow action：" + action.type);
  }
}

const initialTasks = [
  { id: 1, text: "Visit Kafka Museum", done: true },
  { id: 2, text: "Watch a puppet show", done: false },
  { id: 3, text: "Lennon Wall pic", done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(value) {
    dispatch({ type: "added", text: value });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "delete", id: taskId });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function AddTask({ onAddTask }) {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} className="input" placeholder="Add task" />
      <button onClick={() => onAddTask && onAddTask(inputRef.current.value)}>
        Add
      </button>
    </>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(event) => onChange({ ...task, text: event.target.value })}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(event) => onChange({ ...task, done: event.target.checked })}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
