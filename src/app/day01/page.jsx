import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
    title: "Day 1",
    //     title: {
    //     absolute: 'About',
    //   },
}


export default function Day01() {
    return (
        <main className="w-full min-h-screen my-18">
            <h1 className="w-full text-5xl font-semibold text-center my-20">Day-01</h1>

            <Section
                isCompleted={true}
                title={"Next.js App Router create"}>
                <p>Every new routes create same name folder on app folder inside</p>
            </Section>

            <Section
                isCompleted={true}
                title={"Nested Routes"}
            >
                <p>Every new nested routes create routes name folder on parent routes</p>
                <Link className="mt-2 block" href="/day01/docs">ParentRoute- Docs</Link>
                <Link className="mt-2 block" href='day01/docs/installation'>Child Route - Docs/Installation</Link>
                <Link className="mt-2 block" href='day01/docs/public'>Child Route - Docs/Public</Link>
                <Link className="mt-2 block" href='day01/docs/development'>Child Route - Docs/Development</Link>
            </Section>

            <Section
                isCompleted={true}
                title='Catch all Routes & Optional'>
                <p>Catch all Routes work like <strong>*</strong> wildcard. make using [id] so inside page get prams using same folder name <strong>id</strong> </p>
                <Link className="mt-2 block" href="/day01/docs">ParentRoute- Docs</Link>
                <Link className="mt-2 block" href='day01/docs/this-is-catch-all-routes'>catch all Route - Docs/[blogid]</Link>
                <p className="bg-red-200 text-red-800 text-lg p-2"> if make it routes Optional so wrap with extra bracket like this : [[blogId]] , if not any routes when normally page open like home page</p>
            </Section>

            <Section
                isCompleted={true}
                title='meta data update like title and description'>
                <p>👉meta data update like title and description, normally export metadata object</p>
                <p>👉if meta data also support array template, default, and absolute</p>
                <p>👉 absolute overwrite all template title, mean its high priority</p>

            </Section>
            <Section
                isCompleted={true}
                title='portfolio dark_light theme and gear page create'>
                <p>👉add my gears page and theme switcher on portfolio</p>
                <a href="https://new.dhirajarya.xyz" target="_blank" className="mt-2 block text-lg text-red-500">Portfolio↗️</a>
            </Section>
            <Section
                isCompleted={false}
                title='learn html aria attributes for accessibility'>
                <p>👉different type of aria attributes for assessblity</p>
                <p>👉which aria attributes are more important </p>
            </Section>

        </main>
    );
}