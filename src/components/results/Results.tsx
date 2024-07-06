import {UrlResponse} from "@/app/interfaces/urls"
import {ClipboardCopy} from "@patternfly/react-core"
import {useTranslations} from "next-intl"

type ResultsProps = {
  show: boolean
  urlResult: UrlResponse | undefined
}

export const Results: React.FC<ResultsProps> = ({show, urlResult}) => {
  const results = useTranslations("Results")
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl text-[#ff6d28] font-bold mt-5 text-center ">
          {results("title_one")}
        </h3>
        <code
          className={` ${
            show ? "block" : "hidden"
          } border-x-black dark:border-x-white animated fadeIn border text-sm sm:text-base inline-flex text-center items-center justify-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 mt-2`}
        >
          <span className="flex gap-4">
            <span className="flex-1 w-full md:w-[400px] ">
              <ClipboardCopy
                isReadOnly
                hoverTip={results("copy")}
                clickTip={results("copied")}
                className="clipboardInput  "
              >
                {urlResult?.shortUrl || ""}
              </ClipboardCopy>
            </span>
          </span>
        </code>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-5 text-center text-[#ff6d28]">
          {results("title_two")}
        </h3>
        <div id="result" className="mt-2 w-full break-all">
          <p className="text-center text-black dark:text-white">
            {urlResult?.originalUrl}
          </p>
        </div>
        <h3 className="text-xl font-bold mt-5 text-center text-[#ff6d28]">
          {results("title_three")}
        </h3>
        <div id="result" className="mt-2 w-full break-all">
          <p className="text-center text-black dark:text-white">
            {urlResult?.clicks}
          </p>
        </div>
      </div>
    </>
  )
}
