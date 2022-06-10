import React, {useReducer, useState, useRef} from "react";

import Navbar from "../components/Navbars/IndexNavbar.js";
import WebcamCapture from "../components/interview/webcamCapture";
import Footer from "../components/Footers/Footer.js";
import Animations from "../components/interview/animations.js";
import TextToSpeech from "../components/interview/text-to-speech.js";


export default function Landing() {
    const textBox = useRef();
    const [isFinished, setIsFinished] = useState(false)

    const questions = ['Tell me something about yourself',"How did you hear about this position?", "Why do you want to work here?", "Why did you decide to apply for this position?", "What is your greatest strength?",
    "What are your strengths and weaknesses?", "What do you know about this company/organization?"]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
	const handleAnswerOptionClick = () => {
		const nextQuestion = Math.floor(Math.random() * questions.length);;
		textBox.current.value = questions[nextQuestion]
	};

    const handleFinish = () => {
        setIsFinished(true)
    }  

  return (
    <>
    <Navbar transparent />
<div className="w-[80%] mx-auto mt-24">

<div className='question-text'>{questions[currentQuestion]}</div>
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Please enter an interview question!</label>
    <textarea ref={textBox} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
    <div className="grid grid-cols-2 mt-10">
    <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg" onClick={handleAnswerOptionClick}>Get Random Question</button>
    <button className="mx-auto py-2 px-6 bg-gray-700 text-white rounded-lg" onClick={handleFinish}>Finish</button>
    </div>  
		</div>
    {isFinished ?  <main className="min-h-screen">
         <div className="grid grid-cols-2 mt-24 gap-0">
            <div><Animations /></div>
            <div><WebcamCapture /></div>
        </div>
      <div className="mx-auto text-center mt-10">
        <TextToSpeech />
        </div>
        </main> : ""}
    </>
  );
}
