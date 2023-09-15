import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Healthconditions() {
  const [hoveredCondition, setHoveredCondition] = useState(null);

  const handleConditionHover = (condition) => {
    setHoveredCondition(condition);
  };

  const renderSubNavContent = (condition) => {
    // Replace the following content with actual components/data as needed
    if (condition === "Breast Cancer") {
      return (
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-4">
              <a className="dropdown-item  listfont" href="/">
                Acid Reflux
              </a>
              <a className="dropdown-item  listfont " href="/">
                ADHD
              </a>
              <a className="dropdown-item  listfont" href="/">
                Allergies
              </a>
              <a className="dropdown-item  listfont" href="/">
                Alzheimer's & Dementia
              </a>
              <a className="dropdown-item  listfont" href="/">
                Bipolar Disorder
              </a>
              <a className="dropdown-item  listfont" href="/">
                Cancer
              </a>
              <a className="dropdown-item  listfont" href="/">
                Crohn's Disease
              </a>
            </div>
          </div>
        </div>
      );
    } else if (condition === "IBD") {
      return (
        <div>
          <div className="col-md-4">
            <a className="dropdown-item  listfont" href="/">
              Chronic Pain
            </a>
            <a className="dropdown-item  listfont" href="/">
              Cold & Flu
            </a>
            <a className="dropdown-item  listfont" href="/">
              COPD
            </a>
            <a className="dropdown-item  listfont" href="/">
              Depression
            </a>
            <a className="dropdown-item  listfont" href="/">
              Fibromyalgia
            </a>
            <a className="dropdown-item  listfont" href="/">
              Heart Disease
            </a>
            <a className="dropdown-item  listfont" href="/">
              High Cholesterol
            </a>
          </div>
        </div>
      );
    } else if (condition === "Acid Reflux") {
      return (
        <div>
          <div className="col-md-4">
            <a className="dropdown-item  listfont" href="/">
              Acid Reflux
            </a>
            <a className="dropdown-item  listfont" href="/">
              Acid Reflux
            </a>
            <a className="dropdown-item  listfont" href="/">
              Acid Reflux
            </a>
            <a className="dropdown-item  listfont" href="/">
              Acid Reflux
            </a>
            <a className="dropdown-item  listfont" href="/">
              Acid Reflux
            </a>
            <a className="dropdown-item  listfont" href="/">
              Heart Disease
            </a>
            <a className="dropdown-item  listfont" href="/">
              High Cholesterol
            </a>
          </div>
        </div>
      );
    }
    // Add more conditions here if needed
  };

  return (
    <li className="nav-item dropdown has-megamenu">
      <a className="nav-link nvabtn  " href="/">
        {" Health Conditions"}
        <i className="fa fa-angle-down  dropdown"></i>
      </a>

      <div
        className="dropdown-menu megamenu backgroundcolor"
        id="padding"
        role="menu"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-row-reverse">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between ">
                <h3 className="fontsize20">Featured</h3>
                <Link className="arrowbtn fontsize20" to="/maincategories">
                  ALL
                  <i class="far fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
              <hr className="hr-healthcondition"></hr>
              <a
                className="dropdown-item  listfont"
                href="/"
                onMouseEnter={() => handleConditionHover("Breast Cancer")}
              >
                Breast Cancer
              </a>
              <a
                className="dropdown-item  listfont"
                href="/"
                onMouseEnter={() => handleConditionHover("IBD")}
              >
                IBD
              </a>
              <a
                className="dropdown-item  listfont"
                href="/"
                onMouseEnter={() => handleConditionHover("Acid Reflux")}
              >
                Acid Reflux
              </a>

              {/* Add more conditions here */}
            </div>
            <div className="col-md-9">
              <div className="d-flex justify-content-between ">
                <h3 className="fontsize20">Featured</h3>
                <button className="arrowbtn fontsize20">
                  ALL
                  <i className="far fa-arrow-alt-circle-right"></i>
                </button>
              </div>
              <hr className="hr-healthcondition"></hr>
              <div className="healththreecomine d-flex ">
                <div className="col-md-9">
                  {renderSubNavContent(hoveredCondition || "")}
                </div>
                {/* Add more columns here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Healthconditions;
