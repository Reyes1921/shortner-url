"use client"
import {useState} from "react"
import {url} from "../api/url"
import {Error, Info, Results} from "../../components"
import {UrlResponse} from "../interfaces/urls"
import {useTranslations} from "next-intl"

export default function Home() {
  const dict = useTranslations("Home")
  const [urlResult, setUrlResult] = useState<UrlResponse>()
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  //Input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  //Submit request
  const submitRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue.trim().length) return
    try {
      setLoading(true)
      const result = await url(inputValue)
      setUrlResult(result)
      setInputValue("")
      setError(false)
      setShow(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
      setShow(false)
    }
  }
  return (
    <div className="min-h-[calc(100vh_-_14vh)] md:min-h-[calc(100vh_-_22.5vh)] [animation-duration:2.5s] [animation-fill-mode:both] ">
      <a href={dict("path")}>
        <h1 className="text-5xl md:text-8xl mb-5 md:mb-5 md:mt-5 font-bold text-center text-[#ff6d28]">
          Shortner Url
        </h1>
      </a>
      <div className="flex flex-col items-center justify-between">
        <form onSubmit={submitRequest}>
          <div className="relative md:flex justify-between">
            <div className="relative h-10">
              <input
                type="text"
                className="p-7 mt-3.5 peer w-full md:w-[560px] h-12 rounded-[7px] text-black dark:text-white  border border-black dark:border-white bg-transparent px-3 py-2.5 text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
            <div className="flex justify-center">
              <button className="shortner-btn ml-3 p-2 mt-10 md:mt-0 bg-black text-[#ff6d28] text-[17px] border-1 border-black pb[7px] w-[90px] h-[75px] rounded-t-[15px] rounded-b-[12px] relative hover:border-[#ff6d28] hover:border-2 will-change-transform transition-all duration-[0.1s] ease-[ease-in-out] delay-[0s] select-none bg-[linear-gradient(_to_right,rgba(0,0,0,0.8),rgba(0,0,0,0)_),linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0))] bg-[bottom_right,bottom_right] bg-[100%_100%,100%_100%] bg-no-repeat shadow-[inset_-4px_-10px_0px_rgba(255,255,255,0.4),inset_-4px_-8px_0px_rgba(0,0,0,0.3),0px_2px_1px_rgba(0,0,0,0.3),0px_2px_1px_rgba(255,255,255,0.1)] after:content-[''] after:absolute after:bg-[linear-gradient(_to_bottom,rgba(255,255,255,0.2),rgba(0,0,0,0.5)_)] after:z-[-1] after:shadow-[inset_4px_0px_0px_rgba(255,255,255,0.1),inset_4px_-8px_0px_rgba(0,0,0,0.3)] after:transition-all after:duration-[0.1s] after:ease-[ease-in-out] after:delay-[0s] after:rounded-[15px] after:inset-0 before:content-[''] before:absolute before:bg-[linear-gradient(_to_right,rgba(0,0,0,0.8),rgba(0,0,0,0)_),linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0))] before:bg-[bottom_right,bottom_right] before:bg-[100%_100%,100%_100%] before:bg-no-repeat before:z-[-1] before:transition-all before:duration-[0.1s] before:ease-[ease-in-out] before:delay-[0s] before:rounded-[15px] before:inset-0 active:will-change-transform active:h-[75px] active:shadow-[inset_-4px_-8px_0px_rgba(255,255,255,0.2),inset_-4px_-6px_0px_rgba(0,0,0,0.8),0px_1px_0px_rgba(0,0,0,0.9),0px_1px_0px_rgba(255,255,255,0.2)] active:transition-all active:duration-[0.1s] active:ease-[ease-in-out] active:delay-[0s] active:border-[0.25px] active:border-solid active:border-[rgba(0,0,0,0.2)] after:active:bg-[linear-gradient(_to_bottom,rgba(0,0,0,0.5),rgba(255,255,255,0.2)_)] active:before:content-[''] active:before:block active:before:absolute active:before:w-6/12 active:before:h-4/5 active:before:bg-[rgba(255,255,255,0.1)] active:before:animate-[overlay_0.1s_ease-in-out_0s] active:before:pointer-events-none active:before:left-[20%] active:before:top-[5%] transform: perspective(70px) rotateX(5deg) rotateY(0deg) hover:shadow-[inset_-4px_-8px_0px_rgba(255,255,255,0.2)] hover:outline-none active:[transform:perspective(80px)_rotateX(5deg)_rotateY(1deg)_translateY(3px)_scale(0.96)] active:h-[75px] active:border-[0.25px] active:border-[solid] active:border-[rgba(0,0,0,0.2)] active:[box-shadow:inset_-4px_-8px_0px_rgba(255,_255,_255,_0.2),_inset_-4px_-6px_0px_rgba(0,_0,_0,_0.8),_0px_1px_0px_rgba(0,_0,_0,_0.9),_0px_1px_0px_rgba(255,_255,_255,_0.2)] active:[transition:all_0.1s_ease-in-out_0s]">
                {dict("button")}
              </button>
            </div>
          </div>
        </form>
        {error ? (
          <Error />
        ) : loading ? (
          <span className="loader  text-black dark:text-white text-[48px] font-[400] relative inline-block after:content-[''] after:h-1 after:w-[0%] after:block after:animate-[5s_lineGrow_linear_infinite] after:bg-[#ff6d28]">
            {dict("loading")}
          </span>
        ) : (
          <div
            className={` ${
              show ? "block" : "hidden"
            } [animation-duration:2.5s] [animation-fill-mode:both] [animation-name:fadeIn]`}
          >
            <Results show={show} urlResult={urlResult} />
          </div>
        )}
        <Info />
      </div>
    </div>
  )
}
