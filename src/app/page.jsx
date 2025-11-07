import VideoAdd from "@/components/VideoAdd";
import Link from "next/link";

export default function Home() {
  console.log("Home Component");

  return (
    <>
      <main className="w-full max-w-3xl mx-auto">
        <h1 className="w-full text-5xl font-semibold text-center mt-10">Winter Arc Challenge ❄️</h1>
        <p className="w-full text-lg font-normal text-slate-700 text-center mt-2">This app related to my winter arc challenge all demo, codefiles and more</p>

        <VideoAdd
          videoLink={"https://www.youtube.com/embed/1MFLDBCxXuc?si=h7JbViUb5bm3rWUU"}
        />


        <div className="flex justify-center items-center mt-10 flex-col w-full">
          <nav className="gap-3 grid grid-cols-3 md:grid-cols-5 grid-rows-auto">
            <Link href="/day01" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 01↗️
            </Link>
            <Link href="/day02" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 02↗️
            </Link>
            <Link href="/day03" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 03↗️
            </Link>
            <Link href="/day04" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 04↗️
            </Link>
            <Link href="/day05" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 05↗️
            </Link>
            <Link href="/day06" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 06↗️
            </Link>
            <Link href="/day07" className="text-lg font-semibold text-emerald-500 hover:text-emerald-700">
              Day 07↗️
            </Link>

          </nav>
        </div>
      </main>
    </>
  );
}      