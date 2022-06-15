import React, { useState, useRef, useEffect, useCallback } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AiFillDelete, AiFillCamera } from "react-icons/ai"
import Webcam from "react-webcam";

import Navbar from "../../components/Navbars/IndexNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import Animations from "../../components/interview/animations.js";
import Sidebar from "../../components/Navbars/sidebar.js";
import { height } from "@mui/system";



export default function Landing() {
  const textBox = useRef();
  const [snackbar, setSnackbar] = useState(false)
  const [interviewQuestions, setInterviewQuestions] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  const [loading, setLoading] = useState(true)
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [questionCount, setQuestionCount] = useState(0)
  const [mediaError, setMediaError] = useState(false)
  const canvas = useRef();

  var sdk = require("microsoft-cognitiveservices-speech-sdk");

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);


  //Webcam
  const handleStartCaptureClick = useCallback(() => {
    askQuestion();
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();


  }, [webcamRef, setCapturing, mediaRecorderRef, askQuestion]);


  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );


  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);


  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);


  const key = process.env.NEXT_PUBLIC_MICROSOFT_AZURE_KEY;
  const region = process.env.NEXT_PUBLIC_MICROSOFT_AZURE_REGION;

  const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);

  // The language of the voice that speaks.
  speechConfig.speechSynthesisVoiceName = "en-GB-RyanNeural";

  // Create the speech synthesizer.
  var synthesizer = new sdk.SpeechSynthesizer(speechConfig);

  var openingLines = ["Ok that's great!, ", "Great!, ", "That makes a lot of sense! Moving on, "]
  var greeting = "Hi Luke, Welcome to the interview! To start, ... "

  function askQuestion() {
    let question;
    questionCount === 0 ? question = greeting + questions[questionCount] :
      question = openingLines[Math.random() * openingLines.length + 1] + questions[questionCount]

    synthesizer.speakTextAsync(question,
      function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("synthesis finished.");
        } else {
          console.error("Speech synthesis canceled, " + result.errorDetails)
        }
        synthesizer.close();
        synthesizer = null;
      },
      function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = null;
      });
    setQuestionCount(questionCount + 1)
  };


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
    if (textBox.current.value != "") {
      setInterviewQuestions([...interviewQuestions, textBox.current.value])
      textBox.current.value = ''
    }
    else {
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

  if (isFinished && !loading) {
    return (
      <>
        {/* <Sidebar /> */}
        <main className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-4 mx-0 md:mx-10 xl:mx-56 ">
            <div className="rounded-lg max-w-full max-h-full" ref={canvas}><Animations/></div>
            <div className="min-w-full min-h-full ">
              {mediaError ?
                <div className="rounded-3xl bg-[#092540] p-20 text-center">
                  <h2 class="text-5xl font-bold leading-tight text-white">No camera detected!</h2>
                  <p class="mt-5 text-xl leading-8 text-white">If this is an unexpected error please ensure that the website has permission to access your camera.</p>
                  <AiFillCamera className="mx-auto text-white mt-10" size={100} />
                </div>
                : <div className="rounded-lg  min-h-full"><Webcam onUserMediaError={() => setMediaError(true)}  muted audio ref={webcamRef} /> </div>}</div>
          </div>
          <div className="container mx-auto gap-0">
            <div className="flex flex-row mx-auto">
              {/* {recordedChunks.length > 0 && (
            <button onClick={handleDownload}>Download</button>
          )} */}
              {capturing ? (
                <>
                  <div className="mx-auto flex flex-row gap-2 mt-2">
                    <div><button className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 " onClick={askQuestion}>Next Question</button></div>
                    <div><button className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" onClick={handleStopCaptureClick}>Stop Capture</button></div>
                  </div>
                </>
              ) : (
                <div className="mt-2 mx-auto"><button id="interviewBtn" className="bg-red-50 py-2 px-6 rounded-lg " onClick={handleStartCaptureClick}>Start Interview</button></div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
  else {
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
            <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
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
