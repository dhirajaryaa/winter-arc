import Section from '@/components/Section'
import VideoAdd from '@/components/VideoAdd'
import Link from 'next/link'
import React from 'react'

function day3Page() {
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

            {/* <VideoAdd videoLink="https://www.youtube.com/embed/EyHZTlFa-kc?si=Ja9XFEEUKaMnNMvd" /> */}

            <Section isCompleted={true} title={"Rendering in next.js"}>
                <p className='mt-2'>👉 next.js 4 different type of render use</p>
                <p className='mt-2'>👉 1. SSR - Server Side Rendering</p>
                <p className='mt-2'>👉 2. SSG - Server Side Generation</p>
                <p className='mt-2'>👉 3. CSR - Client Side Rendering</p>
                <p className='mt-2'>👉 4. ISR - Incremental Site Rendering</p>
                <p className='mt-2'>⚠️ Next.js Only send html file where page request and anther page file send in <span className='highlighted'>rsc [react-server-component]</span> file. and its use api call to fetch rsc</p>
                <p className='mt-2'>👉 By default ssr use by next.js</p>
            </Section>
            <Section isCompleted={false} title="Static Rendering and Dynamic Rendering">
                <p className='mt-2'>👉 Static File create when build and every time server build file</p>
                <p className='mt-2'>👉 dynamic routes file build on fly <span className='highlighted'>[realtime build on next js server]</span></p>
                <p className='mt-2'>👉 default only visible links csr data coming on request</p>
                <p className='mt-2'>👉 Next.js 13+ use a custom MIME type  to stream component data from the server to the client.</p>
            </Section>
        </main>
    )
}

export default day3Page