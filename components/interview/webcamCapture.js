import {React, useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import { randInt } from "three/src/math/mathutils";

export default function WebcamCapture(questions) {
  var sdk = require("microsoft-cognitiveservices-speech-sdk");

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [questionCount, setQuestionCount] = useState(0)


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
  
  function askQuestion(){
    let question; 
    questionCount === 0 ? question = greeting + questions.questions[questionCount] : 
    question = openingLines[randInt(0, openingLines.length)] + questions.questions[questionCount]

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


  return (
    <>
    <Webcam muted audio ref={webcamRef} style={{width: '100%'}} />
      {capturing ? (
        <>
        <button className="bg-red-50 py-2 px-6 rounded-lg mt-2 mx-auto text-centre" onClick={askQuestion}>Next Question</button>
        <button className="bg-red-50 py-2 px-6 rounded-lg mt-2" onClick={handleStopCaptureClick}>Stop Capture</button>
        </>
      ) : (
        <div className="w-[100%] justify-center items-center">
           <button id="interviewBtn" className="bg-red-50 py-2 px-6 rounded-lg mt-2 mx-auto text-centre" onClick={handleStartCaptureClick}>Start Interview</button>
           
        </div>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  );
}
