import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeighestRetedCard3({ data }) {
  // Define a state to control hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter and leave for hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="mentor-card text-center bdr1 hover-box-shadow mb60 bdrs16">
      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
        <img
          className="rounded-circle mx-auto object-fit-cover"
          src={data.image} // Dynamic image path from mentor data
          alt={data.name} // Dynamic name for alt text
          style={{
            width: "120px", // Ensure consistent size
            height: "120px", // Maintain square aspect ratio
            objectFit: "cover", // Ensure proper cropping
            borderRadius: "50%", // Make the image circular
          }}
        />
      </div>
      <div className="details">
        <h5 className="title mb-1">{data.name}</h5> {/* Dynamic Name */}
        <p className="mb-0">{data.designation}</p> {/* Dynamic Designation */}
        <div className="mt-3">
          <Link
            to={`/mentors/${data.name.replace(" ", "-").toLowerCase()}`} // Link to a detailed page (you can customize this URL format)
            className="btn bdrs60"
            style={{
              backgroundColor: isHovered ? "orange" : "white", // Orange on hover, white otherwise
              color: isHovered ? "white" : "orange", // White text on hover, orange otherwise
              border: "2px solid orange", // Border remains orange
              padding: "10px 20px", // Consistent padding
              textDecoration: "none", // Remove underline for the link
              transition: "all 0.3s ease", // Smooth transition effect
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            View Mentor
          </Link>
        </div>
      </div>
    </div>
  );
}
