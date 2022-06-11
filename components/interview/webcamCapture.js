import {React, useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";




export default function WebcamCapture(questions) {
  var sdk = require("microsoft-cognitiveservices-speech-sdk");
  
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);


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





 

  var key = process.env.MICROSOFT_AZURE_KEY;
  var region = process.env.MICROSOFT_AZURE_REGION;

  const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);

  // The language of the voice that speaks.
  speechConfig.speechSynthesisVoiceName = "en-GB-RyanNeural"; 

  // Create the speech synthesizer.
  var synthesizer = new sdk.SpeechSynthesizer(speechConfig);
  
  function askQuestion(){
      synthesizer.speakTextAsync(`Hi Luke, Welcome to the interview! To start, ... ${questions.questions[0]}`, 
      function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("synthesis finished.");
        } else {
          console.error("Speech synthesis canceled, " + result.errorDetails +
              "\nDid you set the speech resource key and region values?");
        }
        synthesizer.close();
        synthesizer = null;
      },
          function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = null;
      });
      console.log("Now synthesizing to: " + audioFile);
    };


  return (
    <>
    <Webcam muted audio ref={webcamRef} style={{width: '100%'}} />
      {capturing ? (
        <button className="bg-red-50 py-2 px-6 rounded-lg mt-2" onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <div className="w-[100%] justify-center items-center">
           <button className="bg-red-50 py-2 px-6 rounded-lg mt-2 mx-auto text-centre" onClick={handleStartCaptureClick}>Start Interview</button>
        </div>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  );
}
