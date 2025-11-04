export const dynamicParams = false;
export const revalidate = 5;

export function generateStaticParams() {
    return [
        { blogId: "1" },
        { blogId: "2" },
        { blogId: "3" }
    ]
}

async function page({ params }) {
    const { blogId } = await params;
    // const res = await fetch("_", {
    //     next: { revalidate: 5 }
    // });
    // const data = await res.json();
    return (
        <main className="w-full min-h-screen my-30 p-5">
            <h1 className="text-2xl text-center">This page is dynamic and generate static with generateStaticParams fn. call on build</h1>
            <p className="text-2xl text-center bg-violet-500">This is Params: {blogId}</p>

        </main>
    )
}

export default page