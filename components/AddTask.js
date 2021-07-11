import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddTask = () => {
  const item = useSelector(state => state.items)

  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        id: item.length + 1,
        description: task,
        isDone: false,
      },
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className=" mb-4">
       
        <input value={task} type="text" onChange={(e) => setTask(e.target.value)} className="" placeholder="Add Task" />
        <button className="btn btn-success" type="submit">
         Add
        </button>
</div>
    </form>

  );
};

export default AddTask;