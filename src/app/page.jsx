import VideoAdd from "@/components/VideoAdd";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen max-w-3xl mx-auto">
      <h1 className="w-full text-5xl font-semibold text-center mt-20">Winter Arc Challenge ❄️</h1>
      <p className="w-full text-lg font-normal text-slate-700 text-center mt-2">This app related to my winter arc challenge all demo, codefiles and more</p>

      <VideoAdd
        videoLink={"https://www.youtube.com/embed/1MFLDBCxXuc?si=h7JbViUb5bm3rWUU"}
      />
      {/* <div className="flex justify-center items-center mt-10 w-full">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1MFLDBCxXuc?si=h7JbViUb5bm3rWUU"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div> */}

      <div className="flex justify-center items-center mt-10 flex-col w-full">
        <nav className="space-y-3">
          <Link href="/day01" className="block text-lg font-semibold text-emerald-500 hover:text-emerald-700">
            Day 01↗️
          </Link>
        </nav>
      </div>
    </main>
  );
}      