import DataFetch from "@/components/DataFetch"
import DataFetchServer from "@/components/DataFetchServer"
import Section from "@/components/Section"
import ServerComp from "@/components/ServerComp"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"
import { Suspense } from "react"


function day5Page() {
    const subData = ["song", "tree", "pat", "natures"];
    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day05">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day05"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={5}
                >
                    Day-05
                </h1>
            </div>

            {/* <VideoAdd videoLink="https://www.youtube.com/embed/pvuy-0YhuDs?si=mbU4oFUEJVg7tFrm" /> */}

            <Section isCompleted={true} title='Data fetching in next.js'>
                <p className="mt-2">👉 if static site generation sort pried of time regeneration so its call ISR. </p>
                <p className="mt-2">👉 <span className="highlighted">Client Comp. API CAll</span> normally same like react.js</p>
                <DataFetch content={<ServerComp content={subData?.map((data) =>
                    <span key={data} className="px-3 rounded-lg py-1 bg-gray-800 text-gray-50 text-sm">{data}</span>)
                } />} />
                <p className="mt-2">👉 <span className="highlighted">Server Comp. API CAll</span></p>
                <div className="mt-2  p-2 rounded-lg space-y-2">
                    <Suspense fallback='Loading....'>
                        <DataFetchServer />
                    </Suspense>
                </div>
                <p className="mt-2">👉 web api fetch extend by next js so support extra options like [reValidation,caching] </p>
                <p className="mt-2">👉 page label loading page make and page return block by api call or any reason then show loading page.</p>
                <p className="mt-2">👉mainly not api call on page because its block hole page. </p>
                <p className="mt-2">👉 best practice api call brake in components so use streaming data.</p>
                <p className="mt-2">👉 using <span className="highlighted">Promise.all([...])</span> use to call parallel api call, if not depending on each others.</p>
            </Section>

            <Section isCompleted={false} title='Render server component in client component'>

            </Section>
        </main>
    )
}

export default day5Page