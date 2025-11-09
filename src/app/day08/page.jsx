import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Link from "next/link"

export const metadata = {
    title: "Day 8"
}


function day8Page() {

    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day08">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day08"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={8}
                >
                    Day-08
                </h1>
            </div>

            <VideoAdd videoLink="https://www.youtube.com/embed/3D52eTAVfro?si=1WLZuGcqpIH5kbAp" />


            <Section isCompleted={true} title='Server in next.js [ API endpoint ]'>
                <p className="mt-2">👉 all server code on route.js file.</p>
                <p className="mt-2">👉 page and route both on same folder so don't work.</p>
                <p className="mt-2">👉 create handler so export default method type name. [its must be capital latter method name]</p>
                <p className="mt-2">👉 create handler so export default method type name. [its must be capital latter method name like: <span className="highlighted">POST,GET</span>]</p>
                  <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                    <code className="wrap-break-word whitespace-pre-wrap">{`export async function GET(req) {
  console.log(req);
  return Response.json({ message: "Hello from API", req: req.url });
}`}</code>
                </pre>
                <p className="mt-2">👉 get params in routes same like create folder <span className="highlighted">[paramsName]</span> then this folder routes.js file get as second argument</p>
                  <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                    <code className="wrap-break-word whitespace-pre-wrap">{`export async function GET(_, { params }) {
  console.log(await params);

  return Response.json({ message: "Hello from API with id" });
}`}</code>
                </pre>
                <p className="mt-2">👉 params is promises so async await then get value</p>

            </Section>
        </main>
    )
}

export default day8Page