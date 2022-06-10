import React from "react";

import Navbar from "../components/Navbars/IndexNavbar.js";
import WebcamCapture from "../components/interview/webcamCapture";
import Footer from "../components/Footers/Footer.js";
import Animations from "../components/interview/animations.js";
import TextToSpeech from "../components/interview/text-to-speech.js";


export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main className="min-h-screen">
        <div className="grid grid-cols-2 mt-24 gap-0">
            <div><Animations /></div>
            <div><WebcamCapture /></div>
        </div>
      <div className="mx-auto text-center mt-10">
        <TextToSpeech />
        </div>
      </main>
      <Footer />
    </>
  );
}
