
function ServerComp({ content }) {

    console.log("hii from server comp");
    
    return (
        <div>
            <h1 className="text-xl font-semibold">Words</h1>
            <div className="mt-2 space-x-2 space-y-2">
               {content}
            </div>
        </div>
    )
}

export default ServerComp