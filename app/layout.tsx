import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Interior Designer AI",
  description: "Upload a sample room photo and get a design back in seconds.",
  robots: "index, follow",
  openGraph: {
    title: "Interior Designer AI",
    description: "Upload a sample room photo and get a design back in seconds.",
    url: "https://interior-designer-ai.vercel.app/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://interior-designer-ai.vercel.app/app-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of the Interior Designer AI app",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
