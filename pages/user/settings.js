import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"

// ../../components

import CardSettings from "../../components/Cards/CardSettings.js";
import CardProfile from "../../components/Cards/CardProfile.js";
import Navbar from "../../components/Navbars/IndexNavbar.js";

// layout for page

import Admin from "../layouts/Admin.js";
import Footer from "../../components/Footers/Footer.js";



export default function Settings() {
  const { data: session, status } = useSession()
  console.log(session)



  if (status === "authenticated") {
  return (
    <>
    <Navbar />
      <div className="flex flex-wrap dark:bg-slate-700">
        <div className="w-full lg:w-4/12 px-4 dark:bg-slate-700 mt-24">
        <CardProfile name={session.user.name} email={session.user.email} img={session.user.image} interviews={session.user.interviews_practised} bio={session.user.bio}/>
        </div>
        <div className="w-full lg:w-8/12 px-4 mt-24">
          
          <CardSettings firstName={session.user.name.split(" ")[0]} lastName={session.user.name.split(" ")[1]} email={session.user.email} bio={session.user.bio} />
        </div>
      </div>
      <Footer />
    </>
  );
}
}
Settings.layout = Admin;
