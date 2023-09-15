import React, { useState, useEffect } from "react";

function Searchinput() {
  const [index, setIndex] = useState(5); // Initial z-index value
  const [showInput, setShowInput] = useState(false); // Initial visibility of input

  function handleOnClick() {
    const newIndex = index + 1;
    setIndex(newIndex);
    setShowInput(true); // Show the input when the icon is clicked
  }

  useEffect(() => {
    // Event handler to hide input and show icon when clicking on body
    function handleBodyClick(event) {
      // Check if the click was outside of the input and search icon
      if (
        !event.target.closest(".search-input") &&
        !event.target.closest(".serachicon")
      ) {
        setShowInput(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("click", handleBodyClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="d-flex subscribediv">
      <div>
        <button
          type="button"
          className="btn subscribebtn"
          style={{ zIndex: index, color: "white" }}
        >
          Subscribe
        </button>
      </div>
      <div className="search">
        {!showInput && (
          <i
            className="fas fa-search serachicon"
            style={{ zIndex: index, color: "white" }}
            onClick={handleOnClick}
          ></i>
        )}
        <div className="">
        {showInput && (
          <input
            type="text"
            className="search-input"
            style={{ zIndex: index }}
            autoFocus
            placeholder="Search there"
          />
        )}
      </div>
      </div>
     
    </div>
  );
}

export default Searchinput;
