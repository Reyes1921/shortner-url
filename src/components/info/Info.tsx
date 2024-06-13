import Image from "next/image"
import {useTranslations} from "next-intl"

export const Info = () => {
  const info = useTranslations("Info")

  const icons = [
    {
      path: "/handshake.svg",
      title: info("easy_title"),
      desc: info("easy_desc"),
      alt: info("alt_easy"),
    },
    {
      path: "/links.svg",
      title: info("shortened_title"),
      desc: info("shortened_desc"),
      alt: info("alt_shortened"),
    },
    {
      path: "/stats.svg",
      title: info("statistics_title"),
      desc: info("statistics_desc"),
      alt: info("alt_statistics"),
    },
  ]
  return (
    <div className="grid md:grid-cols-3 md:max-w-[850px] px-20 py-10 ">
      {icons.map((item) => (
        <div key={item.title} className="flex flex-col items-center p-5">
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
