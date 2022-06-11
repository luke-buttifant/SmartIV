import React, { useEffect } from "react";

// ../../components

import CardSettings from "../../components/Cards/CardSettings.js";
import CardProfile from "../../components/Cards/CardProfile.js";
import Navbar from "../../components/Navbars/IndexNavbar.js";

// layout for page

import Admin from "../layouts/Admin.js";
import Footer from "../../components/Footers/Footer.js";



export default function Settings() {
  return (
    <>
    <Navbar />
      <div className=" mt-24 flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
      <Footer />
    </>
  );
}

Settings.layout = Admin;
