
function Section({ children, title, isCompleted }) {
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-indigo-600">{isCompleted ? "✅":"❌"} {title}</h2>
            <div className="mt-4 ml-10">
            {children}
            </div>
        </section>
    )
}

export default Section