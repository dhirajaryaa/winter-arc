"use client"
import { useState } from "react"

function ClientCom() {
    const [count, setCount] = useState(0)
    return (
        <div className="mt-2 bg-gray-200 p-2 rounded-lg ">
            <div className="p-2 text-3xl font-extrabold text-red-500">count is: {count}</div>
            <div className="space-x-2 space-y-2">
            <button className="px-2 py-1 bg-violet-500 text-sm mx-1 text-gray-50 rounded-lg hover:bg-violet-700" onClick={() => setCount(count + 1)}>Increment </button>
            <button className="px-2 py-1 bg-violet-500 text-sm mx-1 text-gray-50 rounded-lg hover:bg-violet-700" onClick={() => setCount(count - 1)}>Decrement </button>
            </div>
        </div>
    )
}

export default ClientCom