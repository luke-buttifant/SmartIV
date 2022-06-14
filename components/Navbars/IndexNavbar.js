import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"

import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [auth, setAuth] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(e) {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
    else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
  }

  const [animateHeader, setAnimateHeader] = useState(false)

  useEffect(() => {
    const listener = () =>
      window.scrollY > 140 ? setAnimateHeader(true) : setAnimateHeader(false)
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <>
      <nav className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  shadow bg-white transition duration-500 ease-in-out ${animateHeader && 'bg-slate-700'}`}>
        <label className={`${animateHeader ? "bg-white text-slate-700" : "bg-slate-700"} swap swap-rotate text-white rounded py-2 `}>

          <input className="hidden" type="checkbox" />
          <svg onClick={(e) => toggleDarkMode(e)} id="light" className="swap-on fill-current w-10 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg onClick={(e) => toggleDarkMode(e)} id="dark" className="swap-off fill-current w-10 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
        <div className="container px-4 mx-auto flex flex-row items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <a href="/"
              className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${animateHeader ? `text-white` : `text-slate-700`}`}
            >
              SmartIV
            </a>
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={30} />
          </button>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {auth ? <a href="/auth/signin" className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs font-bold cursor-pointer uppercase">SIGN IN</a> : <IndexDropdown scrollState={animateHeader} />}

              </li>

              <li className="flex items-center mx-auto">
                <a href="/user/interview"><button
                  className={`${animateHeader ? "bg-white text-slate-700" : "bg-slate-700"} text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`}
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Start Interview
                </button></a>
              </li>
            </ul>

          </div>

        </div>

      </nav>

    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session?.user) {
    setAuth(true)
  }
}
