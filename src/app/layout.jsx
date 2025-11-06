// 'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
// import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: {
    template: "%s | Winter Arc Challenge",
    default: "Winter Arc Challenge"
  },
  description: "this app related to my winter arc challenge all demo, codefiles and more",
};

// export const dynamic = "force-dynamic"

export default function RootLayout({ children }) {
  //  const ran = Math.random();
  //   console.log(ran);
  //   if (ran > 0.5) {
  //       throw new Error("Something went wrong");
  //   }
  // const [error, setError] = useState(['afasdf','asdfasdf']);

  // error.map((err) => {
  //   console.log(err);
  // })

  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased w-full min-h-screen bg-gray-50 text-slate-900 dark:bg-slate-900 dark:text-gray-50  relative`}>
        <ThemeProvider>
          <>
            <ThemeToggle />
            <Header />
            <div className="max-w-3xl mx-auto w-full">
              {children}
            </div>
          </>
        </ThemeProvider>

        {/* add clarity code  */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tziq5ez1fn");
          `}
        </Script>
      </body>
    </html>
  );
}
