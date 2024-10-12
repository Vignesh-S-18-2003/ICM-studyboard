
import React from "react";
import { Link } from "react-router-dom";

export default function SSwitzerLandCard({ data }) {
  return (
    <>
      <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
        <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
          
          <span className="online" />
        </div>
        <div className="details">
          <h5 className="title mb-1">{data.name}</h5>
          <p className="mb-0">{data.skill}</p>
          <div className="review">
          
         
          <hr className="opacity-100 mt20 mb15" />
          <div className="fl-meta  align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location :
              <span className="fz14 fw400"> SwitzerLand</span>
            </a><br />
            <a className="meta fw500 text-start">
              Education :
              <span className="fz14 fw400"> {data.location}</span>
            </a><br />
            <a className="meta fw500 text-start">
              Students :
              <span className="fz14 fw400"> {data.rating}</span>
            </a><br />
          </div>
          <div className="d-grid mt15">
            <Link
              to={`/freelancer-single/${data.id}`}
              className="ud-btn btn-white2 double-border bdrs60"
            >
              View and Apply
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
