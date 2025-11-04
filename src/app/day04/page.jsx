import ClientCom from "@/components/ClientCom"
import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"

export const dynamic = "force-dynamic"

function day4Page() {
    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day02">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day02"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={2}
                >
                    Day-03
                </h1>
            </div>

            {/* <VideoAdd videoLink="https://www.youtube.com/embed/pvuy-0YhuDs?si=mbU4oFUEJVg7tFrm" /> */}

            <Section isCompleted={true} title='Incremental Site Regeneration in next.js'>
                <p className="mt-2">👉 if static site generation sort pried of time regeneration so its call ISR. </p>
                <p className="mt-2">👉 it only existed when use static site generation present.</p>
                <p className="mt-2">👉 regeneration trigger call <span className="highlighted">revalidate </span> variable <span className="highlighted">second</span> me time provide  </p>
                <div className="mt-2">
                    <p className="mt-2">👉 <span className="highlighted">revalidate</span> add two different place one is Page Level and second is fetch level ; </p>
                    <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                        <code className="wrap-break-word whitespace-pre-wrap">{`1. export const revalidate = 5
2. const await fetch("_",{next:{revalidate:5}})`}</code>
                    </pre>
                </div>
            </Section>

            <Section isCompleted={true} title={'Force Static to Dynamic Page '}>
                <p className="mt-2">👉 Dynamic page build on req time not the build time</p>
                <p className="mt-2">👉 static page dynamic generation using <span className="highlighted">export dynamic variable</span></p>
                <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                    <code className="wrap-break-word whitespace-pre-wrap">{`export const dynamic = "force-dynamic"`}</code>
                </pre>
                <p className="mt-2">👉 also support different value like: <span className="highlighted">force-dynamic,error,auto,force-static</span> and by default set value auto</p>
                <p className="mt-2">👉 if page inside use <span className="highlighted overflow-auto whitespace-pre-wrap wrap-break-word">searchParams,Cookies,Headers,connection,defaultMode,fetch etc </span> so automatic make dynamic page</p>
                <p className="mt-2">👉 forcefully dynamic page make it static so params,searchParams,Cookies etc show empty value</p>
                <p className="mt-2">👉 if default value <span className="highlighted">error</span> forcefully dynamic page make it static then build time error cause for this is dynamic page.</p>
            </Section>

            <Section isCompleted={true} title='Streaming in next.js'>
                <p className="mt-2">👉 streaming use for long page or components stream in chunk so page load faster</p>
                <p className="mt-2">👉 stream enable wrap page or components in <span className="highlighted">Suspense</span></p>
                <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                    <code className="wrap-break-word whitespace-pre-wrap">{`<Suspense fallback={<div>Loading...</div>}>
<div>long Content or dynamic content</div>
</Suspense>`}</code>
                </pre>
                <p className="mt-2">👉 Suspense give fallback content show when data not yet. if data coming isCompleted then fallback content remove and actual content show</p>
            </Section>
            <Section isCompleted={true} title='Server Components and Client Components'>
                <p className="mt-2">👉 server comp. only run on server</p>
                <p className="mt-2">👉 client comp. run on both side server and client</p>
                <p className="mt-2">👉 client comp. when need interactivity on page</p>
                <p className="mt-2">👉 make client comp. so add top on page <span className="highlighted">"use client"</span> keyword</p>
                <p className="mt-2">👉 react hook etc use on client comp. support</p>
                <ClientCom />
            </Section>
        </main>
    )
}

export default day4Page