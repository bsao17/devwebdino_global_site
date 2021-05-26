import React, { useEffect, useState } from "react";

export default function FolioFooter(props) {

  const[sound, setSound] = useState()

  useEffect(()=>{
    setTimeout(()=>{
      setSound("assets/sounds/openFooter.mp3")
    },13800)
  }, [])

  return (
    <div id="footer">
      <svg  viewBox="0 0 1442 401" fill="none" {...props}>
        <path 
          d="M1 17h1440v370.721s-144.39-35.861-380.54-96.958c-236.16-61.096-465.956 162.892-718.016 96.958C90.384 321.787 1 290.763 1 290.763V17z"
          fill="#fff"
          stroke="#fff"
        />
        <path 
          d="M1 1h1440v370.721s-144.39-35.861-380.54-96.958c-236.16-61.096-465.956 162.892-718.016 96.958C90.384 305.787 1 274.763 1 274.763V1z"
          fill="#175979"
          stroke="#175979"
        />
      </svg>
      <div class="bottomFooter"></div>
      <audio src={sound} autoPlay />
    </div>
  );
}
