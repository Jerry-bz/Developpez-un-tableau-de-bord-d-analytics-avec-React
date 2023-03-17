import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

/**
 * Get page Error if navigation is incorrect
 * @Component - Error
 * @returns {JSX.component}
 */

export default function Error() {
  return (
    <div className="error">
      <div className="error_404">
        <p> Oups! La page que vous recherchez semble introuvable</p>
      </div>
      <Link className="error_redirection " to="/">
        Revenir à la page d'accueil
      </Link>
    </div>
  );
}
