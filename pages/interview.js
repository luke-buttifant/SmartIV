import React, { useReducer, useState, useRef } from "react";

import Navbar from "../components/Navbars/IndexNavbar.js";
import WebcamCapture from "../components/interview/webcamCapture";
import Footer from "../components/Footers/Footer.js";
import Animations from "../components/interview/animations.js";
import TextToSpeech from "../components/interview/text-to-speech.js";


export default function Landing() {
  const textBox = useRef();
  const [interviewQuestions, setInterviewQuestions] = useState([])
  const [isFinished, setIsFinished] = useState(false)

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
    const textBoxVal = textBox.current.value
    setInterviewQuestions([...interviewQuestions, textBoxVal])
    textBox.current.value = ''
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

  if(isFinished){
    return(
      <>
      <Navbar transparent/>
      <main className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-4 mx-0 md:mx-10 xl:mx-56">
          <div><Animations questions={interviewQuestions} /></div>
          <div><WebcamCapture /></div>
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
        <div className="w-52 md:w-96 mx-auto md:mx-0"><img src="/img/questions.jpg"></img></div>
        <div><h1 className="font-bold text-4xl lg:text-6xl lg:mt-16 md:mt-8 mt-4">
          Interview Questions
        </h1>
        <h2 className="mt-2">Enter any interview questions that you think may appear in an interview that you will be attending. </h2>
        <h3>If you struggle to think of a question, use the 'Get Random Question' button to spawn a popular interview question. </h3>
        </div>
        </div>
 
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4">Please enter an interview question!</label>
        <textarea ref={textBox} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        <div className="flex flex-rows mt-10 gap-4">
          <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg" onClick={handleAnswerOptionClick}>Get Random Question</button>
          <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg" onClick={handleAdd}>Add Question</button>
          <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg" onClick={handleFinish}>Finish</button>
        </div>
        <div className="container mb-2 flex mx-auto w-full items-center justify-center mt-10"
        >
          <ul className="grid grid-cols-3 p-4">
            {interviewQuestions.map((question, i) => {
              return (
                <li key={i} className="border-gray-400 flex flex-col mt-2 bg-gray-700 rounded-2xl border-2 p-6 hover:shadow-2xl text-white transition duration-200 ease-in-out transform hover:-translate-y-1 min-w-[100%]">
                  <div
                    className="select-none flex flex-1 items-center"
                  >
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium">
                        {question}
                      </div>
                    </div>
                    <div
                      key={question} onClick={(question) => handleRemove(question)} className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2 hover:bg-red-600 cursor-pointer"
                    >
                      Delete
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
          }
}
