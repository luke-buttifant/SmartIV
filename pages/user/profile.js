import { useSession } from "next-auth/react"
import React from "react";
import Navbar from "../../components/Navbars/IndexNavbar.js";
import Footer from "../../components/Footers/Footer.js";

export default function Profile() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16 " 
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 fill-current dark:text-slate-500"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-slate-200 dark:bg-slate-500">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 dark:bg-slate-700">
              <div className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center">

                  <div className="col-span-1 hidden md:flex">
                    <div className="py-6 px-3 mt-32 sm:mt-0 w-[100%]">
                      <button href="/user/settings"
                        className="bg-slate-700 dark:bg-slate-100 dark:text-slate-700 active:bg-slate-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 "
                        type="button"
                      >
                        Edit Info
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative mx-auto text-center">
                      <img
                        alt="..."
                        src={session.user.image}
                        className="shadow-xl rounded-full h-auto border-none md:absolute -mt-16  max-w-150-px mx-auto md:left-1/2 md:transform md:-translate-x-1/2 "
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className=" justify-center py-4 lg:pt-4 pt-4">
                      <div className=" p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-100">
                          {session.user.interviews_practised}
                        </span>
                        <span className="text-sm text-slate-400 dark:text-slate-100">
                          Interviews Practised
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 dark:text-slate-100">
                  {session.user.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                    {session.user.email}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-100">
                     {session.user.bio}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex md:hidden">
                    <div className="py-6 px-3 sm:mt-0 min-w-[100%]">
                      <button href="/user/settings"
                        className="bg-slate-700 dark:bg-slate-100 dark:text-slate-700 active:bg-slate-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150
                        min-w-[100%]"
                        type="button"
                      >
                        Edit Info
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
}


