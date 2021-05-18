import React from "react";
import BarTitle from "../components/BarTitle";
import BodyFolio from "../components/BodyFolio";
import Navigation from "../components/Navigation";
import FolioBanner from "../components/FolioBanner";
import FolioFooter from "../components/FolioFooter";

export default function Portfolio() {
  return (
    <div className="folio">
      <Navigation />
      <FolioBanner />
      <BarTitle />
      <BodyFolio />
      <FolioFooter/>
    </div>
  );
}
