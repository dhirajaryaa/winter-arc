
function Section({ children, title, description }) {
    return (
        <div className="space-y-3 space-x-2 my-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm ">{description}</p>
            {children}
        </div>
    )
}

export default Section