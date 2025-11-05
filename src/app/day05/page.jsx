import DataFetch from "@/components/DataFetch"
import DataFetchServer from "@/components/DataFetchServer"
import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"
import { Suspense } from "react"


function day5Page() {
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

            <Section isCompleted={false} title='Data fetching in next.js'>
                <p className="mt-2">👉 if static site generation sort pried of time regeneration so its call ISR. </p>
                <p className="mt-2">👉 <span className="highlighted">Client Comp. API CAll</span></p>
                <DataFetch />
                <p className="mt-2">👉 <span className="highlighted">Server Comp. API CAll</span></p>
                <div className="mt-2  p-2 rounded-lg space-y-2">
                    <Suspense fallback='Loading....'>
                    <DataFetchServer />
                    </Suspense>
                </div>

            </Section>

        </main>
    )
}

export default day5Page