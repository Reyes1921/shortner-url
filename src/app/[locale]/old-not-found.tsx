import Link from "next/link"

export default function NotFound() {
  return (
    <div className="main animated fadeIn md:min-w-[850px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className=" text-9xl font-bold text-[#ff6d28]">404</p>
        <Link href="/">
          <button className="button-flag m-5">
            <span className="text-sm flex justify-center items-center">
              Return Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
