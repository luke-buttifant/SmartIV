import React, { useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { useSession, signIn, signOut } from "next-auth/react"


const IndexDropdown = (props) => {
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
                <div className="dropdown mx-auto mb-2 md:mb-0 ">
        <label tabIndex={0} className={`${props.scrollState ? "text-white" : "text-slate-700 dark:text-white"} rounded-btn outline-none text-sm btn-sm cursor-pointer`}>Profile</label>
        <ul tabIndex={0} className={`${props.scrollState ? "text-white bg-slate-700" : "text-slate-700 bg-white"} menu dropdown-content p-2 shadow rounded-box w-52 mt-4`}>
          <li><a href="/user/profile">View Profile</a></li> 
          <li><a href="/user/settings">Account Settings</a></li>
          <hr></hr>
          <li><a onClick={signOut}>Log Out</a></li>
        </ul>
      </div>
      </>
    )
  }
  return (
    <>
      <button className={`${props.scrollState ? "text-white" : "text-slate-700 dark:text-white"} text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-center`}  onClick={() => signIn()}>Sign in</button>
    </>
  )
};

export default IndexDropdown;
