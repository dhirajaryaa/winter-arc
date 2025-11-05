"use client"

import { useState } from "react";
import ServerComp from "./ServerComp";

function DataFetch({content}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/posts?limit=3&skip=10')
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
    }

    return (
        <div className="mt-2  p-2 rounded-lg space-y-2">
            <button className="px-2 bg-violet-500 text-sm py-1 mx-1 text-gray-50 rounded-lg hover:bg-violet-700" onClick={getPosts}>Get Posts</button>
            <div className="w-full space-y-1">
                {posts.map((post) => (
                    <div key={post.id} className="p-2 bg-indigo-200 shadow border rounded-lg text-white">
                        <h2 className="text-sm text-indigo-800 font-semibold">{post.title}</h2>
                        <p className="text-xs text-green-800">{post.body}</p>
                    </div>
                ))}
                {loading && <p className="text-lg text-violet-500 font-semibold text-center my-8 ">Loading...</p>}
            </div>
           {content}
        </div>
    )
}

export default DataFetch