import BlogCard1 from "@/components/card/BlogCard1";
import { blog2 } from "@/data/blog2";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Ieltsblog() {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={`pb90 pb20-md ${
          pathname === "/home-4" || pathname === "/home-7" ? "pt0" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="main-title">
                <h2 className="title">Why take IELTS prep with ICM ?</h2>
               
              </div>
            </div>
            {pathname === "/home-5" && (
              <div className="col-lg-3 align-self-center">
                <div className="text-start text-lg-end mb-4 mb-lg-2">
                  <Link className="ud-btn2" to="/blog-1">
                    All Categories
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="row wow fadeInUp bloggcard" data-wow-delay="300ms">
            {blog2.slice(0, 3).map((item, i) => (
              <div key={i} className="col-sm-6 col-xl-4">
                <BlogCard1
                  data={item}
                  isContentExpanded={pathname === "/home-6" ? true : false}
                />
              </div>
            ))}
          </div>
          <div className="row wow fadeInUp bloggcard" data-wow-delay="300ms">
            {blog2.slice(3, 6).map((item, i) => (
              <div key={i} className="col-sm-6 col-xl-4">
                <BlogCard1
                  data={item}
                  isContentExpanded={pathname === "/home-6" ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
