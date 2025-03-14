"use client";
import { useEffect, useRef } from "react";
import Container from "../container/page";

function Landing() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className=" min-h-screen flex items-center justify-center my-[50px]">
      <Container classNames="flex flex-col">
        {/* Input URL */}
        <div
          className="w-full max-w-[1400px] text-center mx-auto p-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-40px] after:w-full after:h-[1px] after:bg-gray-500 after:opacity-50 "
        >
          <h1 className="text-4xl text-white font-bold mb-4">
            Summarize YouTube Video
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Instantly summarize any YouTube video in seconds.
          </p>
          <form className="flex flex-col items-center gap-4 relative w-full max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter YouTube Video URL"
                className="w-full bg-black p-4 pl-6 text-white text-lg rounded-full shadow-[0_0_15px_rgba(255,105,180,0.6)] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ref={inputRef}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-[0_0_20px_rgba(255,105,180,0.8)] hover:from-purple-700 hover:to-pink-600 transition-all duration-300 absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Summarize"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l1.9 4.6L18 8l-4.6 1.9L12 14l-1.9-4.6L6 8l4.6-1.9L12 2z"></path>
                  <path d="M18 14l1.5 3.5L23 19l-3.5 1.5L18 24l-1.5-3.5L13 19l3.5-1.5L18 14z"></path>
                </svg>
                Summarize
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer text-center text-gray-400 hover:text-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-500"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a2 2 0 0 1 0 4M4.6 15a2 2 0 0 0 0 4M7 3h10M7 21h10M3 7h4M17 7h4M3 17h4M17 17h4"></path>
            </svg>
            <span className="text-lg font-medium">
              Customize Your Summarization
            </span>
          </div>
        </div>
        {/* Choose Options */}
        <div className=" mt-[100px]">
          <h2 className="text-lg font-semibold text-white mb-4 text-center">
            Need to Summarize Texts or Documents?
          </h2>

          <div className="grid grid-cols-auto-fill gap-8">
            {/* Summarize PDF Documents */}
            <div className="flex flex-col gap-4 p-6 bg-transparent border border-gray-700 rounded-lg hover:border-gray-500 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 mb-2 text-left"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <h3 className="text-white font-medium ">
                Summarize PDF Documents
              </h3>
              <p className="text-gray-400 text-sm">
                Upload PDFs and receive concise summaries.
              </p>
            </div>

            {/* Summarize Text */}
            <div className="flex flex-col gap-4 p-6 bg-transparent border border-gray-700 rounded-lg hover:border-gray-500 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 mb-2 text-left"
              >
                <path d="M4 7V4h16v3"></path>
                <line x1="9" y1="20" x2="15" y2="20"></line>
                <line x1="12" y1="4" x2="12" y2="20"></line>
              </svg>
              <h3 className="text-white font-medium">Summarize Text</h3>
              <p className="text-gray-400 text-sm">
                Paste any text to generate summaries.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
