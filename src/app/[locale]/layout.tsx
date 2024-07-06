import "./global.css"
import {Bakbak_One} from "next/font/google"
import {Footer} from "../../components/footer/Footer"
import {Header} from "../../components/header/Header"
import {NextIntlClientProvider} from "next-intl"
import {cookies} from "next/headers"
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
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""
  return (
    <html
      lang={locale}
      className={`${theme} flex min-h-screen flex-col justify-center items-center p-5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-200 to-gray-400 dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-[#0d0d0d] dark:via-gray-900 dark:to-black`}
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
