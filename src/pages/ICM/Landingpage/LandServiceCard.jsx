import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LandServiceCard({ data }) {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`iconbox-style1 ${
          pathname === "/home-8" || pathname === "/help" ? "bdr1" : ""
        }`}
      >
        <div className="icon">
          <span className={data.icon} />
        </div>
        <div className="details mt20">
          <h4 className="title">
            <Link to="/service-1">{data.title}</Link>
          </h4>
          <p className="mb-0">{data.brif} </p>
        </div>
      </div>
    </>
  );
}
