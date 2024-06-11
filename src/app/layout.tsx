import type {Metadata} from "next"
import {Bakbak_One} from "next/font/google"
import "./globals.css"
import {Footer} from "./components/footer/Footer"
import Head from "next/head"

const inter = Bakbak_One({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Shortner Url",
  description: "Acortador de links rapido y fácil",
  alternates: {
    canonical: "https://shortner-url-fast.vercel.app/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="flex min-h-screen flex-col items-center  p-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <Head>
        <link rel="icon" href="./links.svg" />
      </Head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
