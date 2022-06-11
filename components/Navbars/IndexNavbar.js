import React, { useState } from "react";
import Link from "next/link";
import {FaBars} from "react-icons/fa"
// components

import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [auth, setAuth] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-slate-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                SmartIV
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars size={30}/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {auth ?  <a href="/auth/signin" className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs font-bold cursor-pointer uppercase">SIGN IN</a> : <IndexDropdown />}
                
              </li>

              <li className="flex items-center">
                <a href="/interview"><button
                  className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
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
