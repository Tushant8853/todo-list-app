import React from "react";

const Task = ({ task, toggleComplete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)}>
        {task.completed ? "✔️" : "◻️"} {task.task}
      </span>
    </div>
  );
};

export default Task;
