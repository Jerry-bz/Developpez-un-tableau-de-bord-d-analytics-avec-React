import React, { useState, useEffect } from "react";
import "./Metabolisme.css";
import iconLipids from "../../assets/iconLipids.svg";
import iconCarbohydrates from "../../assets/iconCarbohydrates.svg";
import iconProteins from "../../assets/iconProteins.svg";
import iconCalories from "../../assets/iconCalories.svg";
import PropTypes from "prop-types";

/**
 * Component that displays the graph Metabolisme
 * @Component UserMetabolisme
 * @param {object} keyData - get result keydata
 * @returns {JSX.component}
 */

export default function UserMetabolisme({ keyData }) {  
  
  const [calorie, setCalorie] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [lipid, setLipid] = useState(0);

  useEffect(() => {
    if (keyData) {
      setCalorie(keyData.calorieCount);
      setProtein(keyData.proteinCount);
      setCarbohydrate(keyData.carbohydrateCount);
      setLipid(keyData.lipidCount);
    }
  }, [keyData]);

  return (
    <div className="metabolisme">
      <div className="metabolisme_box">
        <img src={iconCalories} alt="icone iconCalories" />
        <div className="metabolisme_infos">
          {calorie} Kcal <br />
          <span>Calories</span>
        </div>
      </div>
      <div className="metabolisme_box">
        <img src={iconProteins} alt="icone iconProteins" />

        <div className="metabolisme_infos">
          {protein} g <br />
          <span>Proteines</span>
        </div>
      </div>
      <div className="metabolisme_box">
        <img src={iconCarbohydrates} alt="icone iconCarbohydrates" />

        <div className="metabolisme_infos">
          {carbohydrate} g <br />
          <span>Glucides</span>
        </div>
      </div>
      <div className="metabolisme_box">
        <img src={iconLipids} alt="icone lipid" />

        <div className="metabolisme_infos">
          {lipid} g<br /> <span>Lipides</span>
        </div>
      </div>
    </div>
  );
}

// The keyData property must be an object
UserMetabolisme.propTypes = {
  keyData: PropTypes.object,
};
