import {useState} from 'react'

const Navbarex = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full shadow-md min-h-[60px] p-[20px]">
      <div className="items-center justify-between bg-white py-4 px-7 md:flex md:px-10">
        <div className="flex mx-4 cursor-pointer items-center justify-between font-[Poppins] text-2xl font-bold text-gray-800">
          <span className="mr-1 pt-2 text-3xl text-indigo-600"> Designer </span>
          <span
            onClick={() => setOpen(!open)}
            className=" right-8 top-6 text-3xl md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
        <ul
          className={`left absolute z-[-1] w-full bg-white pb-12 pl-5 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          <li className="py-2 text-xl md:my-0 md:ml-8">
            <a
              href="1"
              className="text-gray-800 duration-300 hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li className="py-2 text-xl md:my-0 md:ml-8">
            <a
              href="2"
              className="text-gray-800 duration-300 hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li className="py-2 text-xl md:my-0 md:ml-8">
            <a
              href="3"
              className="text-gray-800 duration-300 hover:text-gray-400"
            >
              Contact
            </a>
          </li>
          <button className="rounded bg-indigo-500 py-2 px-6 font-[Poppins] text-white hover:bg-indigo-700 md:ml-8">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbarex
