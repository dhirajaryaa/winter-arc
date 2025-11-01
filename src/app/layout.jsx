import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${roboto.className} antialiased w-full`}
      >
        <Header />
        <div className="max-w-3xl mx-auto w-full min-h-screen">
          {children}
        </div>
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
