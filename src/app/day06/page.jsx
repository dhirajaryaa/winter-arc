import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"

export const metadata = {
    title: "Day 6"
}


function day6Page() {

    // const ran = Math.random();
    // console.log(ran);
    // if (ran > 0.5) {
    //     throw new Error("Something went wrong");
    // }

    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day06">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day06"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={6}
                >
                    Day-06
                </h1>
            </div>

            <VideoAdd videoLink="https://www.youtube.com/embed/j14x5P5nAUw?si=VyShvYboXjEA5WMt" />
          

            <Section isCompleted={true} title='Error Handling in Next.js'>
                <p className="mt-2">👉 Page Level Error.js page create work as error fallback.</p>
                <p className="mt-2">👉 Error.js Page two props return<span className="highlighted">error object and reset fn.</span></p>
                <p className="mt-2">👉 error return <span className="highlighted">digest number</span> so easy to find error with same digest number</p>
                <p className="mt-2">👉 If this error happens randomly, just <span className="highlighted">refresh the page</span> — it normally resolves it.</p>
                <p className="mt-2">👉 If Server Side Error Page Refresh using <span className="highlighted">{`StartTransition(()=>{})`}</span> give the callback and inside callback call reset fn. and refresh fn from next/navigation</p>
                <p className="mt-2">👉 If Client Side Error Page Refresh using directly<span className="highlighted">{`StartTransition(()=>{})`}</span> reset fn. provide by error props</p>
                <p className="mt-2">👉 error page in auto wrapped on nested child component</p>
            </Section>

            <Section isCompleted={true} title='Global Error Boundary in Next.js'>
                 <p className="mt-2">👉 app root level create global-error.js/jsx file and export default.</p>
                 <p className="mt-2">👉 same work like pages error page but etc catch layout error.</p>
                 <p className="mt-2">👉 this page return <span className="highlighted">full html page</span> not only div etc. becaus etc not wrapped in layout etc parent of layout. </p>
                 <p className="mt-2">👉it's not catch on development mode only work on production mode. </p>
                 <p className="mt-2">👉not work any routes function by next js. <span className="highlighted">pure js code work</span></p>
            </Section>
        </main>
    )
}

export default day6Page