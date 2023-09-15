import React from "react";
import Healthconditions from "./Healthconditions";
import Plans from "./plans";
import Connect from "./Connect";
import Discover from "./Discover";
import Searchinput from "./Searchinput";
import Categorynav from "./Categorynav";

function CustomNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="mainnavid">
        <div className="container-fluid black-bg">
          <div className="d-flex collapse navbar-collapse" id="main_nav">
            <div className="companyname">
              <a className="navbar-brand logotext" href="#">
                healthline
              </a>
            </div>
            <div className="d-flex main-navitems">
              
              <ul className="navbar-nav">
                <li className="nav-item dropdown has-megamenu healthconditions-item ">
                  <Healthconditions />
                </li>
                <li className="nav-item dropdown has-megamenu discover-item">
                  <Discover />
                </li>

                <li className="nav-item dropdown has-megamenu plans-item">
                  <Plans />
                </li>
                <li className="nav-item dropdown has-megamenu connect-item">
                  <Connect />
                </li>
              </ul>
            </div>
            <div className=" searchdiv">
              
             <Searchinput/>
            </div>
          </div>
        </div>
      </nav>
      <div className="Categorynav">
      {/* Category button under the main navbar */}
        <Categorynav/>
      </div>
    </div>
  );
}

export default CustomNavbar;
