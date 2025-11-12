import TaskItem from './TaskItem'

async function TaskBody() {
  const res = await fetch("http://localhost:3000/day09/api/todos");
  const data = await res.json();
  const todos = data.data || [];

  return (
    <>
      <div className="px-4 py-2 flex gap-2 flex-col justify-center items-center">
        {todos?.map((item, index) => {
          return <TaskItem key={index} todo={item} />
        })}

      </div>
    </>
  )
}

export default TaskBody