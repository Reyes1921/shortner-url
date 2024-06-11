import React from "react"
import Image from "next/image"

export const Info = () => {
  const icons = [
    {
      path: "/handshake.svg",
      title: "Easy",
      desc: "Easy and fast, enter a long link and get a short one",
      alt: "Handshake logo",
    },
    {
      path: "/links.svg",
      title: "Shortened",
      desc: "Makes long links look cleaner and easier to share!",
      alt: "Links logo",
    },
    {
      path: "/stats.svg",
      title: "Statistics",
      desc: "Tracks the number of clicks",
      alt: "Stats logo",
    },
  ]
  return (
    <div className="grid md:grid-cols-3 md:max-w-[850px] px-20 py-10">
      {icons.map((item) => (
        <div key={item.title} className="flex flex-col items-center p-2">
          <Image
            className="flex justify-center"
            src={item.path}
            width={100}
            height={100}
            alt={item.alt}
          />
          <h3 className="text-center text-2xl text-[#ff6d28]">{item.title}</h3>
          <p className="text-center text-base"> {item.desc}</p>
        </div>
      ))}
    </div>
  )
}
