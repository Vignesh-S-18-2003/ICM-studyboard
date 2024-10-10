import servimg from '/images/servximg/servx.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react"; // Import your product data here
import { product1 } from '@/data/product';

export default function PopularServiceCardx({
  data = product1[0], // Default to the first item from product1
  style = "",
  isContentExpanded = false,
}) {
  const [isFavActive, setFavActive] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`listing-style1 ${
          pathname === "/home-2" ||
          pathname === "/home-9" ||
          pathname === "/home-16" ||
          pathname === "/home-14"
            ? "bdrs16"
            : ""
        } ${pathname === "/home-7" ? "style5" : ""} ${style}`}
        style={
          pathname === "/home-20" ? { border: "none", boxShadow: "none" } : {}
        }
      >
        <div className="list-thumb">
          <img className="w-100" src={servimg} alt="thumbnail" />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
          <h5 className="list-title">
            <Link to={`/service-single/${data.id}`}>
              {data.title}
              <p>{data.category}</p>
            </Link>
          </h5>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <div className="budget">
              <p className="mb-0 body-color">
                {data.deliveryTime} delivery . {data.price} USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
