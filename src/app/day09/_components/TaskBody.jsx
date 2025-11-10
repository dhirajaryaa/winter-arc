'use client'
import TaskItem from './TaskItem'
import { useState } from 'react';

function TaskBody() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="px-4 py-2 flex gap-2 flex-col justify-center items-center">
        {todos?.map((item, index) => {
          return <TaskItem key={index} />
        })}

      </div>
    </>
  )
}

export default TaskBody