async function DataFetchServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch('https://dummyjson.com/posts?limit=3&skip=10');
    const data = await res.json();
    const posts = data.posts;

    if(!res.ok){
        return <div className="bg-red-500 p-4">API call failed</div>
    }

    return (
        <>
        <div className="w-full space-y-1">
            {posts?.map((post) => (
                <div key={post.id} className="p-2 bg-indigo-200 shadow border rounded-lg text-white">
                    <h2 className="text-sm text-indigo-800 font-semibold">{post.title}</h2> 
                    <p className="text-xs text-green-800">{post.body}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default DataFetchServer
