import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

/**
 * Show Home page and redirect to page user
 * @Component Home
 * @returns {JSX.component}
 */

function Home() {
  return (
    <div className="home">
      <Link to="/User/18">
        <div className="home_user">
          <h3>Cecilia</h3>
        </div>
      </Link>
      <Link to="/User/12">
        <div className="home_user">
          <h3>Karl</h3>
        </div>
      </Link>
    </div>
  );
}

export default Home;
