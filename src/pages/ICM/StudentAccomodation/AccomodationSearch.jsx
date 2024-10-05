import React, { useState } from "react";

const AccomodationSearch = () => {
  // State for selected dropdown values
  const [getSelectedCourseLevel, setSelectedCourseLevel] = useState(null);
  const [getSelectedCourseStream, setSelectedCourseStream] = useState(null);
  const [getSelectedCourseDestination, setSelectedCourseDestination] = useState(null);

  // Sample data for dropdowns
  const courseLevels = ["Undergraduate", "Postgraduate", "Doctorate"];
  const courseStreams = ["Engineering", "Business", "Arts", "Science"];
  const courseDestinations = ["USA", "UK", "Canada", "Australia"];

  // Handlers for dropdown selections
  const courseLevelHandler = (level) => {
    setSelectedCourseLevel(level); // Update the selected course level
  };

  const courseStreamHandler = (stream) => {
    setSelectedCourseStream(stream); // Update the selected course stream
  };

  const courseDestinationHandler = (destination) => {
    setSelectedCourseDestination(destination); // Update the selected course destination
  };

  // Handler for the 'Find Scholarship' button
  const findScholarshipHandler = () => {
    // Logic to find the scholarship based on selected dropdown values
    if (getSelectedCourseLevel && getSelectedCourseStream && getSelectedCourseDestination) {
      alert(`Searching scholarships for:
        Course Level: ${getSelectedCourseLevel}
        Course Stream: ${getSelectedCourseStream}
        Course Destination: ${getSelectedCourseDestination}`);
    } else {
      alert("Please select all fields before searching.");
    }
  };

  return (
    <>
<h1 className="text-center pb90">Browse Scholarships</h1>
    <div className="pb90  d-flex justify-content-center advance-search-tab bgc-white bdrs4 p10 position-relative zi1 animate-up-3 justify-content-center text-center" >
      
      <div className="row">
        {/* Course Level Dropdown */}
        <div className="col-md-3 col-lg-3 col-xl-3">
          <div className="bselect-style1 bdrl1 bdrn-sm">
            <div className="dropdown bootstrap-select">
              <button
                type="button"
                className="btn dropdown-toggle btn-light"
                data-bs-toggle="dropdown"
              >
                <div className="filter-option">
                  <div className="filter-option-inner">
                    <div className="filter-option-inner-inner">
                      {getSelectedCourseLevel !== null
                        ? getSelectedCourseLevel
                        : "Destination"}
                    </div>
                  </div>
                </div>
              </button>
              <div className="dropdown-menu ">
                <div className="inner show">
                  <ul className="dropdown-menu inner show">
                    {courseLevels.map((item, index) => (
                      <li
                        onClick={() => courseLevelHandler(item)}
                        key={index}
                        className={getSelectedCourseLevel === item ? "selected active" : ""}
                      >
                        <a className="dropdown-item">
                          <span className="text">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Stream Dropdown */}
        <div className="col-md-3 col-lg-3 col-xl-3">
          <div className="bselect-style1 bdrl1 bdrn-sm">
            <div className="dropdown bootstrap-select">
              <button
                type="button"
                className="btn dropdown-toggle btn-light"
                data-bs-toggle="dropdown"
              >
                <div className="filter-option">
                  <div className="filter-option-inner">
                    <div className="filter-option-inner-inner">
                      {getSelectedCourseStream !== null
                        ? getSelectedCourseStream
                        : "University Name"}
                    </div>
                  </div>
                </div>
              </button>
              <div className="dropdown-menu ">
                <div className="inner show">
                  <ul className="dropdown-menu inner show">
                    {courseStreams.map((item, index) => (
                      <li
                        onClick={() => courseStreamHandler(item)}
                        key={index}
                        className={getSelectedCourseStream === item ? "selected active" : ""}
                      >
                        <a className="dropdown-item">
                          <span className="text">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Destination Dropdown */}
        <div className="col-md-3 col-lg-3 col-xl-3">
          <div className="bselect-style1 bdrl1 bdrn-sm">
            <div className="dropdown bootstrap-select">
              <button
                type="button"
                className="btn dropdown-toggle btn-light"
                data-bs-toggle="dropdown"
              >
                <div className="filter-option">
                  <div className="filter-option-inner">
                    <div className="filter-option-inner-inner">
                      {getSelectedCourseDestination !== null
                        ? getSelectedCourseDestination
                        : "Type of Housing"}
                    </div>
                  </div>
                </div>
              </button>
              <div className="dropdown-menu ">
                <div className="inner show">
                  <ul className="dropdown-menu inner show">
                    {courseDestinations.map((item, index) => (
                      <li
                        onClick={() => courseDestinationHandler(item)}
                        key={index}
                        className={getSelectedCourseDestination === item ? "selected active" : ""}
                      >
                        <a className="dropdown-item">
                          <span className="text">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Scholarship Button */}
        <div className="col-md-3 col-lg-3 col-xl-3">
          <div className="text-center text-xl-start">
            <button
              onClick={findScholarshipHandler}
              className="ud-btn btn-thm bdrs4 bdrs4-sm w-100"
              type="button"
            >
              Find 
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AccomodationSearch;
