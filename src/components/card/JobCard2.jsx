import { Link } from "react-router-dom";

import testimonalimg from '../../../public/images/postarrivalpage/testimonal.png';
export default function JobCard2({ data }) {
  return (
    <>
      <div className="job-list-style1 at-home7 bdr1 mb60">
        <div className="icon d-flex align-items-center mb20">
          <img className="w-100 h-auto" src="/images/postarrivalpage/testimonal.png" alt="job-image" />
          <h6 className="mb-0 text-thm ml20"></h6>
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details">
          <h5 className="mb20">
            {/* <Link to={`/job-single/${data.id}`}>{data.title}</Link> */}
          </h5>
          <h4>John Doe</h4>
         
            <p
              className="list-inline-item mb-0  pl10" 
            >
              “Lorem ipsum dolor sit amet consectetur. Placerat vestibulum adipiscing urna nec ultrices id mattis orci est. Dolor venenatis varius pellentesque tristique pulvinar quisque risus id” 
            </p>
        </div>
      </div>
    </>
  );
}
