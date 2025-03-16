"use client";
import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      if (text) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
      } else {
        alert("No text available for speech synthesis.");
      }
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        {/* Question Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index} // Added key prop
              className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                activeQuestionIndex === index
                  ? "bg-blue-700 text-white"
                  : "bg-secondary text-black"
              }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        {/* Active Question Display */}
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question || "No question available."}
        </h2>

        {/* Text-to-Speech Button */}
        <Volume2
          className="cursor-pointer"
          onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
          title="Listen to the question"
        />

        {/* Note Section */}
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
            Enable your webcam and microphone to start your AI-generated mock interview. The interview consists of 5 questions, and you will receive a report based on your answers. <br />
            <strong>Note:</strong> We never record your video. You can disable webcam access anytime.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
