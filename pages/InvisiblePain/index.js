import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const InvisiblePain = () => {
 

  return (
    <div className="scrollable-page bg-bgpain w-full h-full bg-local bg-cover bg-center ">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
      Invisible Pain
      </h3>
      <div className="flex justify-center items-center m-5">
        <iframe
          src="https://open.spotify.com/embed/track/1Is8hGpkGMiePASAxBluxM?utm_source=generator"
          width="500px"
          height="80px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
    
      </div>

      <style jsx>{`
        .scrollable-page {
          overflow: auto;
          max-height: 100vh;
        }
      `}</style>

      <div className="flex item-center justify-center sm:mb-10">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-10">
        <div>
          <img
            src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-1.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-2.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-3.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-4.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-5.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-6.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default InvisiblePain;
