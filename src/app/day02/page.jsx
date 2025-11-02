import Section from "@/components/Section";
import VideoAdd from "@/components/VideoAdd";
import Link from "next/link";

function day2Page() {
  return (
    <main className="w-full min-h-screen my-18" aria-labelledby="day02">
      <div className="space-x-2 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium shrink-0">
          ⬅️Back to Home
        </Link>
        <h1
          id="day02"
          className="flex-1 text-5xl font-semibold text-center my-20"
          aria-level={2}
        >
          Day-02
        </h1>
      </div>

      <VideoAdd videoLink="https://www.youtube.com/embed/EyHZTlFa-kc?si=Ja9XFEEUKaMnNMvd" />

      <Section isCompleted={true} title="Web Accessibility - important only">
        <details className="mt-2">
          <summary>Semantic Tags in Html</summary>
          <figure>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20241127115416984900/html-sementics-layout.png"
              alt="semantics html dom image"
            />
          </figure>
        </details>

        {/* ARIA examples */}
        {[
          {
            label: "aria-label : give name for screen reader, not visible on screen",
            code: `<button aria-label="trash-button">Move to trash</button>`,
          },
          {
            label: "aria-labelledby : use another element as name",
            code: `<h2 id="sectionTitle">Profile Info</h2>
<div aria-labelledby="sectionTitle">
  user info...
</div>`,
          },
          {
            label: "aria-hidden : hide from screen reader",
            code: `<span aria-hidden="true">🔥</span>`,
          },
          {
            label: "aria-live : notify screen reader on content change",
            code: `<div aria-live="polite">You have 3 new messages</div>`,
          },
          {
            label: "aria-expanded : show open/close state",
            code: `<button aria-expanded="false">Menu</button>`,
          },
          {
            label: "aria-controls : indicate controlled element",
            code: `<button aria-controls="menuList" aria-expanded="false">Menu</button>
<ul id="menuList"> ... </ul>`,
          },
          {
            label: "aria-current : indicate current page in navigation",
            code: `<a href="/home" aria-current="page">Home</a>`,
          },
          {
            label: "role : describe element type (not aria-role)",
            code: `<button aria-label="Submit form">Submit</button>
<h1 role="heading">Heading</h1>
<nav role="navigation">Navigation</nav>`,
          },
        ].map(({ label, code }, i) => (
          <div key={i} className="mt-4">
            <p>👉 {label}</p>
            <pre className="p-2 bg-gray-200 rounded overflow-auto whitespace-pre-wrap break-words">
              <code className="wrap-break-word whitespace-pre-wrap">{code}</code>
            </pre>
          </div>
        ))}
      </Section>

      <Section isCompleted={true} title="Not Found page in next.js">
        <p>👉 Create `not-found.js` page at root level for custom error page</p>
        <p>👉 Separate not-found page only works in dynamic routes</p>
        <p>
          👉 Use <span className="highlighted">notFound()</span> to trigger 404
          programmatically
        </p>
      </Section>

      <Section isCompleted={true} title="Route Grouping and Private Routes">
        <p>👉 Mainly used to organize routes</p>
        <p>
          👉 Create group routes folder wrapped with{" "}
          <span className="highlighted">( )</span>
        </p>
        <p>👉 Example: about and services routes in name - Dhiraj Arya</p>
        <p>
          👉 Private routes mean app routes based on file & folder, not dynamic
          data
        </p>
        <p>
          👉 To create private routes, prefix folder name with{" "}
          <span className="highlighted">_underscore</span>
        </p>
        <p>
          👉 If needed, use <span className="highlighted">%5F</span> instead of{" "}
          <span className="highlighted">_</span> in route paths
        </p>
      </Section>
    </main>
  );
}

export default day2Page;