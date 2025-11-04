"use client"
import { useState } from "react"

function ClientCom() {
    const [count, setCount] = useState(5)
    new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div className="mt-2 bg-gray-200 p-2 rounded-lg ">
            <div className="p-2 text-3xl font-extrabold text-gray-500">count is: <span className="text-red-500">{count}</span></div>
            <div className="space-x-2 space-y-2">
                <button className="px-2 bg-violet-500 text-4xl mx-1 text-gray-50 rounded-lg hover:bg-violet-700" onClick={() => setCount(count + 1)}>+</button>
                <button className="px-3  bg-violet-500 text-4xl mx-1 text-gray-50 rounded-lg hover:bg-violet-700" onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default ClientCom