import React from "react";

// components

export default function CardProfile(props) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-700 w-full mb-6 shadow-xl rounded-lg mt-16 lg:min-h-screen-75">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={props.img}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-100">
                    {props.interviews}
                  </span>
                  <span className="text-sm text-slate-400 dark:text-slate-100">Interviews Practised</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal text-slate-700 mb-2 dark:text-slate-100 ">
              {props.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
              {props.email}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-100">
                  {props.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
