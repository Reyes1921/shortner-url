import "./global.css"
import type {Metadata} from "next"
import {Bakbak_One} from "next/font/google"
import {Footer} from "../components/footer/Footer"
import {NextIntlClientProvider} from "next-intl"
import {getMessages} from "next-intl/server"
import {Header} from "../components/header/Header"

const inter = Bakbak_One({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Shortner Url",
  description: "Acortador de links rapido y fácil",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://shortner-url-fast.vercel.app/",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {locale: string}
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()
  return (
    <html
      lang={locale}
      className="flex min-h-screen flex-col items-center p-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0d0d0d] via-gray-900 to-black"
    >
      <body className={inter.className}>
        <Header />
        <NextIntlClientProvider messages={dictionaries}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  )
}
