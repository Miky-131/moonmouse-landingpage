"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "./Hero";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Partnerships from "./Partnerships";
import Footer from "../components/Footer";
import LoadingAnimation from "../components/LoadingAnimation";

export default function Home() {
  const [isSafari, setIsSafari] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const isSafariBrowser = navigator.vendor?.indexOf("Apple") > -1;
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isSafari ? (
        <style jsx global>
          {`
            body:after {
              content: "";
              position: fixed;
              top: 0;
              height: 100vh; /* fix for mobile browser address bar appearing disappearing */
              left: 0;
              right: 0;
              z-index: -1;
              background: url("/background4.jpg");
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              background-attachment: scroll;
            }
          `}
        </style>
      ) : (
        <style jsx global>
          {`
            body {
              background-image: url("/background4.jpg");
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: top center;
          `}
        </style>
      )}
      <Header />
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden"
        id="home"
      >
        {!isPageLoaded && <LoadingAnimation />}
        <Hero />
        <Tokenomics />
        <Roadmap />
        <Partnerships />
      </main>
      <Footer />
    </>
  );
}
