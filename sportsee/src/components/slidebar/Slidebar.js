import iconMeditation from "../../assets/iconMeditation.svg";
import iconSwiming from "../../assets/iconSwiming.svg";
import iconBike from "../../assets/iconBike.svg";
import iconDumbbell from "../../assets/iconDumbbell.svg";
import  "./Slidebar.css";
import React from "react";

export default function Slidebar() {
  return (
    <nav className="slidebar">
      <div className="slidebar_activities">
        <img
          className="slidebar_img"
          src={iconMeditation}
          alt="logo meditation"
        ></img>
        <img
          className="slidebar_img"
          src={iconSwiming}
          alt="logo swimming"
        ></img>
        <img
          className="slidebar_img"
          src={iconBike}
          alt="logo bike"
        ></img>
        <img
          className="slidebar_img"
          src={iconDumbbell}
          alt="logo dumbbell"
        ></img>
      </div>
      <p className="slidebar_text">Copyright, SportSee 2020</p>
    </nav>
  );
}
