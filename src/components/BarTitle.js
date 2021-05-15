import React from "react";
import Logo from "./Logo";
import LogoFull from './LogoFull'

export default function BarTitle() {
  return (
    <div className="container">
      <div className="titleContainer">
        <Logo className="logo"></Logo>
        <LogoFull className="logoFull"></LogoFull>
      </div>
    </div>
  );
}
