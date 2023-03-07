import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

/**
 * Show home page and redirect to user
 * @Component Home
 * @returns {JSX.component}
 */

function Home() {
  return (
    <div className="home">
      <div className="home_user">
        <Link to="/User/18">
          <div>
            <h3>Cecilia id:18</h3>
          </div>
        </Link>
        <Link to="/User/12">
          <div>
            <h3>Karl id:12</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
