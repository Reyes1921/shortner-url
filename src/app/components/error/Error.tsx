import {useTranslations} from "next-intl"

export const Error = () => {
  const dict = useTranslations("Error")
  return (
    <div className="px-10">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5"
        role="alert"
      >
        <strong className="font-bold">Ooops! </strong>
        <span className="block sm:inline">{dict("error")}</span>
      </div>
    </div>
  )
}
