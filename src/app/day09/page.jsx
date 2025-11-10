import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"
import AddTask from "./_components/AddTask"
import TaskItem from "./_components/TaskItem"
import TaskBody from "./_components/TaskBody"

export const metadata = {
    title: "Day 9"
}


function day9Page() {

    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day09">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day09"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={9}
                >
                    Day-09
                </h1>
            </div>

            {/* <VideoAdd videoLink="https://www.youtube.com/embed/3D52eTAVfro?si=1WLZuGcqpIH5kbAp" /> */}


            <Section isCompleted={true} title={"CURD in Next.js"} >

            </Section>
            <h2 className="font-bold text-2xl text-center mb-4">Todo List</h2>
            <section className="flex flex-col gap-4">
                <AddTask />
                <TaskBody />
            </section>
 


        </main>
    )
}

export default day9Page