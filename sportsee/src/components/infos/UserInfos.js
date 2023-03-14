import "./UserInfos.css";
import PropTypes from "prop-types";
import React from "react";

/**
 * Component that displays the user's first name
 * @Component - Infos
 * @param {string} firstName - The user's first name
 * @returns {JSX.Element}
 */

export default function Infos({ firstName }) {
  return (
    <section className="userInfos">
      <h3 className="userInfos_title">
        Bonjour <span className="userInfos_firstName">{firstName}</span>
      </h3>
      <p className="userInfos_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

// The firstName property must be a string
Infos.propTypes = {
  firstName: PropTypes.string,
};
