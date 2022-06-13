import React, { useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { useSession, signIn, signOut } from "next-auth/react"


const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <a
        className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mx-auto"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Profile
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "flex flex-col " : "hidden ") +
          "bg-white text-base z-50  py-2 list-none text-left rounded shadow-lg min-w-48 md:w-48"
        }
      >
          <a
            href="/user/profile"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-center"
            }
          >
            View Profile
          </a>
          <a
            href="/user/settings"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-center"
            }
          >
            Settings
          </a>
        <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />


          <button onClick={() => signOut()}
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-center cursor-pointer"
            }
          >
            Log Out
          </button>
      </div>
      </>
    )
  }
  return (
    <>
      <button className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-center" onClick={() => signIn()}>Sign in</button>
    </>
  )
};

export default IndexDropdown;
