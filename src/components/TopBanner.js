import React, { useState } from "react";

export default function TopBanner() {
  const [img, setImg] = useState({
    imac: './assets/images/imac.png',
    iphone: './assets/images/iphone.png',
    ipad: './assets/images/ipad.png',
    dwdLogo: './assets/images/white_logo_full.png'
  })
  return (
    <div id="bannerTop">
      <img id="imac" src={img.imac} alt="Imac computer"/>
      <img id="iphone" src={img.iphone} alt="Iphone"/>
      <img id="ipad" src={img.ipad} alt="Ipad"/>
      <img id="dwdLogo" src={img.dwdLogo} alt="Logo devwebdino.com"/>
      <div id="jingle">
        <div>Améliorer son Business ...</div>
        <div>Être en phase avec son époque ...</div>
        <div>Booster son activité ...</div>
      </div>
      <svg
        viewBox="0 0 1442 401"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 17H1441V387.721C1441 387.721 1296.61 351.86 1060.46 290.763C824.3 229.667 594.504 453.655 342.444 387.721C90.3846 321.787 1 290.763 1 290.763V17Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M1 1H1441V371.721C1441 371.721 1296.61 335.86 1060.46 274.763C824.3 213.667 594.504 437.655 342.444 371.721C90.3846 305.787 1 274.763 1 274.763V1Z"
          fill="#175979"
          stroke="#175979"
        />
      </svg>
    </div>
  );
}
