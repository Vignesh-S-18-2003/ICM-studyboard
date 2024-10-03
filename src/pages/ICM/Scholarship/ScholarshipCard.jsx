import { Link } from "react-router-dom";

export default function ScholarshipCard({ data }) {
  return (
    <>
      {" "}
      <Link to="/project-1">
        <div className="feature-style1 mb30 bdrs16">
          <div className="feature-img bdrs16 overflow-hidden">
            <img
              className="w-100 h-auto"
              src={data.img}
              alt="feature image"
            />
          </div>
          <div className="feature-content">
            <div className="top-area">
                
              <h2 className="text">{data.title}</h2>
              <h6 className="title mb-1">{data.skill}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
