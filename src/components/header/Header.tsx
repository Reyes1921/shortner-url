import Link from "next/link"
import Image from "next/image"
import {useTranslations} from "next-intl"
import {DarkMode} from "./DarkMode"

export const Header = () => {
  const dict = useTranslations("Header")
  return (
    <header className="md:max-w-[850px] relative w-full bottom-0 mx-auto left-0 right-0 md:pr-5 pb-1 mb-0">
      <div className="flex justify-center md:justify-end items-center">
        <Link
          href={dict("path")}
          className="flex justify-center md:justify-end"
        >
          <button className="button-flag">
            <Image
              src={dict("logo")}
              height={25}
              width={25}
              alt={dict("alt")}
              className="pr-1"
            />
            <span className="text-sm text-black dark:text-white">
              {dict("title")}
            </span>
          </button>
        </Link>
        <DarkMode />
      </div>
    </header>
  )
}
