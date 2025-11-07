import Section from "@/components/Section"
import VideoAdd from "@/components/VideoAdd"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Day 7"
}


function day7Page() {

    // const ran = Math.random();
    // console.log(ran);
    // if (ran > 0.5) {
    //     throw new Error("Something went wrong");
    // }

    return (
        <main className="w-full min-h-screen my-18" aria-labelledby="day07">
            <div className="space-x-2 flex items-center justify-between">
                <Link href="/" className="text-sm font-medium shrink-0">
                    ⬅️Back to Home
                </Link>
                <h1
                    id="day07"
                    className="flex-1 text-5xl font-semibold text-center my-10"
                    aria-level={7}
                >
                    Day-07
                </h1>
            </div>

            {/* <VideoAdd videoLink="https://www.youtube.com/embed/j14x5P5nAUw?si=VyShvYboXjEA5WMt" /> */}
          

            <Section isCompleted={true} title='Image Optimization in Next.js'>
               <img src="https://images.unsplash.com/photo-1643761440694-afdc3cd06863?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlciUyMGFyY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="wallpaper"  className="mt-2 w-xs" />
               <span className="text-background invert-50">unoptimized</span>
               <p className="mt-2">👉 Next.js Provide <span className="highlighted">{`<Image />`} component use for optimized image rendering</span></p>
               <Image src="/11.jpg" alt="wallpaper" width={384} height={240}  className="mt-2 "
                // quality={80}
                // unoptimized
               />
               <span className="text-background invert-50">optimized</span>

                <p className="mt-2">👉 <span className="highlighted">{`<Image />`}</span> component required <span className="highlighted">width and height</span> are important</p>
                <p className="mt-2">👉 default Image srcset set for different density different image show</p>
                <p className="mt-2">👉 default Image srcset set for different density different image show</p>
                <p className="mt-2">👉 if image compressed quality set passing <span className="highlighted">quality</span> value , by default set on 75</p>
                <p className="mt-2">👉 if default image load not optimized required so set <span className="highlighted">unoptimized</span> value pass for prevent compression</p>
                <p className="mt-2">👉 default next.js not allow to use external image source.</p>
                <p className="mt-2">👉 if use external image source so configure on <span className="highlighted">next.config.js</span> add image site hostname</p>
                 <pre className="p-2 mt-1 bg-gray-200 rounded overflow-auto whitespace-pre-wrap wrap-break-word">
                        <code className="wrap-break-word whitespace-pre-wrap">{`images : {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      }
    ]
  }`}</code>
                    </pre>
                    <p className="mt-2"> 👉 Image component accept <span className="highlighted">loader() fucntion</span> also provied callback etc and revived props inside<span className="highlighted">src, width and quality</span> important to return src  then set on Image src overwrite etc use for mainly use on image query based optimization accept like cloudinary,imagekit etc site </p>
                    <p className="mt-2"> 👉 Next.js background use <span className="highlighted">sharp npm library</span> for image optimization.</p>

            </Section>
        </main>
    )
}

export default day7Page