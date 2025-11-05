
function ServerComp({ words }) {

    console.log("hii I'm server component👋");

    return (
        <div>
            <h1 className="text-lg font-semibold text-rose-600">server component rendering in clinet component</h1>
            <div className="flex flex-wrap gap-2 mt-2">
                {words?.map((data) =>
                    <span key={data} className="px-3 rounded-lg py-1 bg-gray-800 text-gray-50 text-sm">{data}</span>)
                }
            </div>
        </div>
    )
}

export default ServerComp