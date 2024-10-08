import BlogCard1 from "@/components/card/BlogCard1";
import { blog3, blogx1 } from "@/data/blog3";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SimcardBlog() {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={`pb40 pb20-md ${
          pathname === "/home-4" || pathname === "/home-7" ? "pt0" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between">
            <h1
              className="text-center"
              style={{ margin: '0', marginBottom: '10px' }} // Set margin to 0 to remove gap
            >
              Benefits!
            </h1>
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

          {/* Single Row with 3 Blog Cards */}
          <div className="row wow fadeInUp bloggcard" data-wow-delay="300ms">
            {blogx1.slice(0, 3).map((item, i) => (
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
