
function TaskItem() {
  return (
    <div className="flex p-1 rounded-lg bg-gray-100 shadow border border-gray-200 w-full justify-between mt-1">
                        <div className="flex items-center gap-2 px-2">
                            <input type="checkbox" className="size-4 sm:size-5" />
                            <p className="text-base py-1 truncate flex-1">This is todo list</p>
                        </div>
                        <button className="border rounded-lg p-1 border-gray-400 cursor-pointer">❌</button>
                    </div>
  )
}

export default TaskItem