'use client'
function AddTask() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target[0].value);
    e.target[0].value = ""
  }
  return (
    <form className="w-full px-4 py-2 flex gap-2" onSubmit={handleSubmit}>
      <input className="w-full px-4 py-2 rounded-lg border border-gray-400 text-sm md:text-lg" />
      <button className="px-4 bg-violet-500 text-sm text-gray-50 rounded-lg hover:bg-violet-700 inset-2">
        Add</button>
    </form>
  )
}

export default AddTask