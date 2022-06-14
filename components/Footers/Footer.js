import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiTwitter, FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-100  dark:bg-slate-700 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold dark:text-white">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-600 dark:text-slate-300">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                aria-label="Twitter Button"
                  className="bg-white dark:bg-slate-800 dark:text-slate-300 text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                 <FiTwitter size={26} className="mx-auto"/>
                </button>
                <button
                aria-label="Facebook Button"
                  className="bg-white dark:bg-slate-800 dark:text-slate-300 text-sky-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FiFacebook size={26} className="mx-auto"/>
                </button>
                <button
                aria-label="Instagram Button"
                  className="bg-white dark:bg-slate-800 dark:text-slate-300 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FiInstagram size={26} className="mx-auto"/>
                </button>
                <button aria-label="GitHub Button"
                  className="bg-white dark:bg-slate-800 dark:text-slate-300 text-slate-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                 <FiGithub size={26} className="mx-auto"/>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2 dark:text-white">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="https://www.lukebuttifant.co.uk"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="https://github.com/luke-buttifant/SmartIV"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2 dark:text-white">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a 
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm dark:text-slate-300"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
