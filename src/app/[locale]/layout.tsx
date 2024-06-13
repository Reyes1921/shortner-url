import "./global.css"
import {Bakbak_One} from "next/font/google"
import {Footer} from "../components/footer/Footer"
import {Header} from "../components/header/Header"
import {NextIntlClientProvider} from "next-intl"
import {getMessages, getTranslations} from "next-intl/server"

interface RootMetadata {
  params: {locale: string}
}

export async function generateMetadata({params}: RootMetadata) {
  const t = await getTranslations({params, namespace: "Metadata"})

  return {
    description: t("description"),
    title: "Shortner Url",
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "https://shortner-url-fast.vercel.app/",
    },
  }
}

const inter = Bakbak_One({weight: "400", subsets: ["latin"]})

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
