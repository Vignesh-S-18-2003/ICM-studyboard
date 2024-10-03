import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import React from "react";

export default function SAustraliaCard({ data, itemClass }) {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`${
          itemClass
            ? itemClass
            : " col-4 freelancer-style1 text-center bdr1 hover-box-shadow mb60"
        } ${pathname !== "/home-10" ? "at-home7 bdrs4" : ""}`}
      >
        <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
          {/* <img
            className="rounded-circle mx-auto object-fit-cover"
            src={data.img}
            alt="avatar"
          /> */}
          <span className="online" />
        </div>
        <div className="details">
          <h5 className="title mb-1">{data.name}</h5>
          <p className="mb-0">{data.skill}</p>
          
          <hr className="opacity-100 mt20 mb15" />
          <div className="fl-meta  align-items-center justify-content-start">
            <a className="meta fw500 text-start">
              Location: 
              <span className="fz14 fw400"> Australia</span>
            </a>
            
            <br />
            <a className="meta fw500 text-start">
              Education
              <span className="fz14 fw400"> {data.location}</span>
            </a>
            <br />
            <a className="meta fw500 text-start">
              Students
              
              <span className="fz14 fw400"> {data.rating}</span>
            </a>
            <br />
          </div>
          <div className=" mt15">
            <Link
              to={`/freelancer-single/${data.id}`}
              className="ud-btn btn-white2 double-border bdrs4"
            >
              View and Aplly
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
