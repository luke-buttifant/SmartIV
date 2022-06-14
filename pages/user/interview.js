import React, { useState, useRef, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { MutatingDots } from  'react-loader-spinner'
import {AiFillDelete} from "react-icons/ai"

import Navbar from "../../components/Navbars/IndexNavbar.js";
import WebcamCapture from "../../components/interview/webcamCapture";
import Footer from "../../components/Footers/Footer.js";
import Animations from "../../components/interview/animations.js";
import Sidebar from "../../components/Navbars/sidebar.js";



export default function Landing() {
  const textBox = useRef();
  const [snackbar, setSnackbar] = useState(false)
  const [interviewQuestions, setInterviewQuestions] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  const [loading, setLoading] = useState(true)


  const questions = ['Tell me something about yourself.', "How did you hear about this position?", "Why do you want to work here?", "Why did you decide to apply for this position?", "What is your greatest strength?",
    "What are your strengths and weaknesses?", "What do you know about this company/organization?"]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextQuestion = Math.floor(Math.random() * questions.length);;
    textBox.current.value = questions[nextQuestion]
  };

  const handleFinish = () => {
    setIsFinished(true)
  }

  const handleAdd = () => {
    if (interviewQuestions.length >= 8) return;
    if(textBox.current.value != ""){
      setInterviewQuestions([...interviewQuestions, textBox.current.value])
      textBox.current.value = ''
    } 
    else{
      setSnackbar(true)
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  }

  const handleRemove = (question) => {
    const newArr = [...interviewQuestions]
    var result = question.target[Object.keys(question.target)[0]].key;
    for (let i = 0; i < interviewQuestions.length; i++) {
      if (interviewQuestions[i] == result) {
        newArr.splice(i, 1);
        setInterviewQuestions(newArr);
        return
      }
    }

  }

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if(isFinished && !loading){
    return(
      <>
      <Navbar transparent/>
      <Sidebar />
      <main className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-4 mx-0 md:mx-10 xl:mx-56">
          <div><Animations  /></div>
          <div className="min-w-[100%] min-h-full"><WebcamCapture questions={interviewQuestions}/></div>
        </div>
      </main>
      <Footer />
      </>
    )
  }
  else{
  return (
    <>
      <Navbar transparent />
      <div className="w-[80%] mx-auto mt-24">
        <div className="grid grid-cols-1 md:flex md:flex-row">
        <div className="w-52 md:w-96 mx-auto md:mx-0"><img width="100%" height="100%" alt="man sat operating laptop confused" src="/img/questions.webp"></img></div>
        <div><h1 className="font-bold text-4xl lg:text-6xl lg:mt-16 md:mt-8 mt-4">
          Interview Questions
        </h1>
        <h2 className="mt-2">Enter any interview questions that you think may appear in an interview that you will be attending. </h2>
        <h3>If you struggle to think of a question, use the 'Random Question' button to spawn a popular interview question. </h3>
        </div>
        </div>
 
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4">Please enter an interview question!</label>
        <textarea ref={textBox} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        <div className="flex flex-rows mt-2 gap-1 md:gap-4">
          <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg w-[100%]" onClick={handleAnswerOptionClick}>Random Question</button>
          <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg  w-[100%]" onClick={handleAdd}>Add Question</button>
          <button className="mx-auto py-2 px-6 bg-[#FEBF4C] text-white rounded-lg  w-[100%]" onClick={handleFinish}>Continue</button>
        </div>
        <div className="mb-2 flex mx-auto w-full items-center justify-center mt-10"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 p-4 ">
            {interviewQuestions.map((question, i) => {
              return (
                <li key={i} className="border-gray-400 flex flex-col mt-2 bg-gray-700 rounded-2xl border-2 p-6 hover:shadow-2xl text-white transition duration-200 ease-in-out transform hover:-translate-y-1 min-w-[100%]">
                  <div
                    className="select-none grid grid-cols-3 items-center"
                  >
                    <div className=" pl-1 col-span-2 mr-10">
                      <div className="font-medium">
                        {question}
                      </div>
                    </div>
                    <div
                      key={question} onClick={(question) => handleRemove(question)} className="text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2 hover:bg-red-600 cursor-pointer"
                    >
                     <AiFillDelete />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mx-auto">
        <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}>
        <MuiAlert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          Please enter a question!
        </MuiAlert>
      </Snackbar>
      </div>
      </div>
    </>
  );
          }
}
