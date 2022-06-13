import React, { useRef, useState } from "react";
import Router from 'next/router'

// components

export default function CardSettings(props) {
  const fName = useRef();
  const lName = useRef();
  const bio = useRef();
  

  const submitHandler = async(e) => {
    
    e.preventDefault();

    const data = {name: `${fName.current.value} ${lName.current.value}`, email: "lukerhys.lb@gmail.com", bio: bio.current.value}
    try{
      fetch('/api/prisma/update',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
   ).then(() => Router.reload(window.location.pathname))
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <>
   <form className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0 min-h-screen-75" onSubmit={submitHandler}>
      <div className="">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
          
            <h6 className="text-slate-700 text-xl font-bold">Account Settings</h6>
             
            <button
              className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
         
            <div className="flex flex-col mt-6 mx-auto">
              <div className="w-full  px-4 mx-auto">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    disabled
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={props.email}
                    
                  />
                </div>
              </div>
              <div className="w-full  px-4 mx-auto">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                  ref={fName}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={props.firstName}
                  />
                </div>
              </div>
              <div className="w-full  px-4 mx-auto">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                  ref={lName}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={props.lastName}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                  ref={bio}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue={props.bio}
                  ></textarea>
                </div>
              </div>
            </div>
        </div>
        </form>
    </>
  );
}
