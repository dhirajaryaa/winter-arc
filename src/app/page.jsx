import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen max-w-3xl mx-auto">
      <h1 className="w-full text-5xl font-semibold text-center mt-20">Winter Arc Challenge ❄️</h1>
      <p className="w-full text-lg font-normal text-slate-700 text-center mt-2">This app related to my winter arc challenge all demo, codefiles and more</p>
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