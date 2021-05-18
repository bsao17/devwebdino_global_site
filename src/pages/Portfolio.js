import React from "react";
import BarTitle from '../components/BarTitle'
import BodyFolio from "../components/BodyFolio";
import TopBanner from '../components/TopBanner'

export default function Portfolio() {
  return (
    <div>
      <TopBanner />
      <BarTitle />
      <BodyFolio/>
    </div>
  );
}
