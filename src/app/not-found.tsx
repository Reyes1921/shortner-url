import Link from "next/link"

export default function NotFound() {
  return (
    <html className="flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0d0d0d] via-gray-900 to-black">
      <body>
        <div className="min-h-[calc(100vh_-_14vh)] md:min-h-[calc(100vh_-_22.5vh)] animated fadeIn md:min-w-[850px] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-9xl font-bold text-[#ff6d28]">404</p>
            <Link href="/">
              <button className="button-error  flex items-center font-bold-[500px] text-[17px] p-4 text-[white] tracking-wider rounded-2xl  m-5  border-solid border-2 border-[#ff6d28] hover:scale-90 ease-in-out duration-500">
                <span className="text-sm flex justify-center items-center ">
                  Go Back / Atrás
                </span>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
