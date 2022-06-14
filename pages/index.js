/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {MdOutlinePersonPin} from "react-icons/md"
import {RiEmotionLaughLine} from "react-icons/ri"
import {BiVideoRecording} from "react-icons/bi"
import {FaCut} from "react-icons/fa"
import {GiTakeMyMoney} from "react-icons/gi"
import {AiFillGithub} from "react-icons/ai"
import {DiOpensource} from "react-icons/di"


import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Index() {
  
  return (
    <>
      <div className="bg-white dark:bg-slate-700 ">
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-4xl text-slate-600 dark:text-white">
              SmartIV an intelligent interview practise platform.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Made by job seekers for job seekers!
                Use a combination of tools to help you practise for your next interview.
              </p>
              <div className="mt-12">
                <a
                  href="#"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400  dark:text-slate-800 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/luke-buttifant/SmartIV"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github Star
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          width="1920"
          height="1537"
          className="absolute top-0 b-auto right-0 pt-24 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/illustration.webp"
          alt="two people conversing"
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100 dark:bg-slate-500 js-show-on-scroll">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-slate-200 dark:text-slate-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">

            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="w-100  px-12 md:px-4 mr-0 lg:mr-10">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-slate-700 mt-10">
                <img
                  width="1920"
                  height="1440"
                  alt="Lady waving from laptop"
                  src="/img/conference-call.webp"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-slate-600 fill-current"
                    ></polygon>
                  </svg>
                  <h2 className="text-xl font-bold text-white">
                    Smash your next interview!
                  </h2>
                  <p className="text-md font-light mt-2 text-white">
                    Nailing an interview has never been easier. Use SmartIV to prepare and receive real time feedback on how to improve your responses. 
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="grid grid-rows-2 ml-10">
            <div className="relative flex flex-col mt-4 dark:text-wh">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <MdOutlinePersonPin size={30}/> 
                      </div>
                      <h3 className="text-xl mb-1 font-semibold dark:text-white">
                        Automated Interviewer
                      </h3>
                      <p className="mb-4 text-slate-500 dark:text-slate-100">
                        Get your questions read out to you in real time!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <BiVideoRecording size={30}/>
                      </div>
                      <h4 className="text-xl mb-1 font-semibold dark:text-white">
                        Record your response
                      </h4>
                      <p className="mb-4 text-slate-500 dark:text-slate-100">
                        Record and play back your interview to evaluate your performance.
                      </p>
                    </div>
                  </div>
            </div>
            <div className="grid grid-rows-2 ml-10">
            <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <RiEmotionLaughLine size={30}/> 
                      </div>
                      <h5 className="text-xl mb-1 font-semibold dark:text-white">Emotion Detection</h5>
                      <p className="mb-4 text-slate-500 dark:text-slate-100">
                        Our AI proffesional will evaluate your facial expressions and give you real time feedback on how to improve!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FaCut size={30}/>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold dark:text-white">
                        Streamline your response!
                      </h6>
                      <p className="mb-4 text-slate-500 dark:text-slate-100">
                        SmartIV will offer ways to streamline your response!
                      </p>
                    </div>
                  </div>
            </div>


            </div>

          </div>
        </div>
        </section>

<section>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <GiTakeMyMoney size={30}/>
                </div>
                <h3 className="text-3xl font-bold dark:text-white">
                  Completely Free
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-100">
                  Put your money away! Here at SmartIV we believe that everyone should have access to interview assistance. 
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                width="1920"
                height="1537"
                alt="two people conducting an interview"
                className="max-w-full rounded-lg shadow-xl w-full"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/interview.webp"
              />
            </div>
          </div>
        </div>
        </section>


      <section className="bg-slate-200 dark:bg-slate-600 overflow-hidden">
        <div className="container mx-auto pb-64 mt-20">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-32">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <DiOpensource size={30}/>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-slate-700 dark:text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 dark:text-slate-400 text-slate-600">
                Since{" "}
                <a
                  href="https://github.com/luke-buttifant/SmartIV/blob/main/package.json"
                  className="dark:text-slate-300 text-slate-900 font-medium"
                  target="_blank"
                >
                  all of the modules
                </a>{" "}
                used to create this application are open-source projects we wanted to continue this movement
                too.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 dark:text-slate-400 text-slate-600">
                Get it free on Github and please show your appreciation with a
                Star!
              </p>
              <a
                href="https://github.com/luke-buttifant/SmartIV"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative ">
            <AiFillGithub className="text-slate-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80 hidden lg:flex"/>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
