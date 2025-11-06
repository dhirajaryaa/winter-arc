'use client'

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error,reset }) {
    const router = useRouter();
    const reloadPage = () => {
        startTransition(() => {
            reset();
            router.refresh();
        })
    }
    return (
        <main className="w-full min-h-screen my-18">
            <h1 className="w-full text-5xl font-semibold text-center my-20">
                {error.message}

            </h1>
            <button onClick={reloadPage}>ReLoad 🔄️</button>
        </main>
    );
}