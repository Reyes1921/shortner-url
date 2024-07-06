"use client"
import Image from "next/image"
import {useEffect, useState} from "react"
import {setCookie, getCookie, hasCookie} from "cookies-next"

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark(!isDark)
    let darkModeValue = isDark ? "light" : "dark"
    setCookie("theme", darkModeValue, {maxAge: 2592000})
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    if (
      getCookie("theme") === "dark" ||
      (!hasCookie("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setCookie("theme", "dark", {maxAge: 2592000})
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setCookie("theme", "light", {maxAge: 2592000})
      setIsDark(false)
    }
  }, [])

  return (
    <button
      className="mr-2 md:mr-5 border-[#111827] dark:border-white rounded-lg p-0.5 hover:scale-110 hover:opacity-70"
      onClick={handleClick}
    >
      <Image
        src="/sun.svg"
        alt="Sun Logo"
        width={22}
        height={22}
        className="hidden dark:flex invert"
      />
      <Image
        src="/moon.svg"
        alt="Moon Logo"
        width={22}
        height={22}
        className="flex dark:hidden"
      />
    </button>
  )
}
