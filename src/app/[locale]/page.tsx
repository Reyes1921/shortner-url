"use client"
import {useState} from "react"
import {url} from "../api/url"
import {Error, Info, Results} from "../components"
import {UrlResponse} from "../interfaces/urls"
import {useTranslations} from "next-intl"

export default function Home() {
  const dict = useTranslations("Home")
  const [urlResult, setUrlResult] = useState<UrlResponse>()
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState<any>(null)
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const submitRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const result = await url(inputValue)
      setUrlResult(result)
      setInputValue("")
      setError("")
      setShow(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error)
      setShow(false)
    }
  }
  return (
    <div className="main animated fadeIn">
      <a href="/">
        <h1 className="text-5xl md:text-8xl mb-10 mt-10 font-bold text-center textColor">
          Shortner Url
        </h1>
      </a>
      <div className="flex flex-col items-center justify-between">
        <form onSubmit={submitRequest}>
          <div className="relative md:flex justify-between">
            <div className="relative h-10">
              <input
                type="text"
                className="p-7 mt-3.5 peer w-full md:w-[560px] h-12 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
            <div className="flex justify-center">
              <button className="delete-button ml-3 p-2 mt-10 md:mt-0">
                {dict("button")}
              </button>
            </div>
          </div>
        </form>
        {error ? (
          <Error />
        ) : loading ? (
          <span className="loader">{dict("loading")}</span>
        ) : (
          <div className={` ${show ? "block" : "hidden"} animated fadeIn`}>
            <Results show={show} urlResult={urlResult} />
          </div>
        )}
        <Info />
      </div>
    </div>
  )
}
