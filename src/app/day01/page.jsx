import Section from "@/components/Section";

export default function Day01() {
    return (
        <main className="w-full min-h-screen">
            <h1 className="w-full text-5xl font-semibold text-center my-20">Day-01</h1>

            <Section
            title={"Next.js App Router create"}
            >

            </Section>
            <ol className="list-decimal text-2xl">
                <li>✅ Next.js APP Router </li>
                <li>✅ Nested Routes </li>
                - 
                <li>✅ Catch all Routes & Optional </li>
                <li>✅ metadata update </li>
                <li>✅ Error page customized & custom Error Page on dynamic route </li>
                <li>✅ Portfolio setup page & dark_light mode </li>
                <li>❌ Theory - HTML Accessibility (aria-* attributes) </li>
            </ol>
        </main>
    );
}