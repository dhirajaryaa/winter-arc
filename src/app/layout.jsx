import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
