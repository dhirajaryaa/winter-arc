import Section from "@/components/Section"

function day2Page() {
    return (
        <main className="w-full min-h-screen my-18">
            <h1 className="w-full text-5xl font-semibold text-center my-20">Day-02</h1>

            <Section isCompleted={true} title={"Web Accessibility - important only"}>
                <details className="mt-2">
                    <summary>Semantic Tags in Html</summary>
                    <figure>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241127115416984900/html-sementics-layout.png" alt="semantics html dom image" />
                    </figure>
                </details>
                <p className="mt-2">👉 aria-label : give name for screen reader, its not visible on screen</p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<button aria-label="trash-button">Move to trash</button>
`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-labelledby : any anther element use as name</p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<h2 id="sectionTitle">Profile Info</h2>
<div aria-labelledby="sectionTitle">
    user info...
</div>

`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-hidden : hide form screen reader</p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<span aria-hidden="true">🔥</span>`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-live : when programming change,so screen reader announced, content like: notification</p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<div aria-live="polite">You have 3 new messages</div>`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-expanded : menu,dropdown,accordion open or close status show </p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<button aria-expanded="false">Menu</button>`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-controls : this element which element control </p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<button aria-controls="menuList" aria-expanded="false">Menu</button>
<ul id="menuList"> ... </ul>
`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-current : help to tell this is current page on navigation (screen reader ko active page batne ke liye) </p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<a href="/home" aria-current="page">Home</a>
`}
                    </code>
                </pre>
                <p className="mt-2">👉 aria-role : element type ko describe like: button,heading, navigation</p>
                <pre className="p-1 bg-gray-200">
                    <code>
                        {`<button aria-label="Submit form">Submit</button>
<h1 aria-role="heading">Heading</h1>
<nav aria-role="navigation">Navigation</nav>
`}
                    </code>
                </pre>


            </Section>

            <Section
                isCompleted={true}
                title={"Not Found page in next.js"}
            >
                <p>👉 create not-found.js page on root label to custom error page</p>
                <p>👉 separate not found page not support only in dynamic routes work</p>
                <p>👉 using js call <span className="bg-red-400">notfound()</span> to show 404 page in next.js</p>
            </Section>
        </main>
    )
}

export default day2Page