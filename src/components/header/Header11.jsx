import { Link } from "react-router-dom";
import Navigation from "./Navigation";

import MobileNavigation6 from "./MobileNavigation6";

export default function Header11() {
  return (
    <>
      <header
        className="header-nav nav-innerpage-style stricky main-menu border-0 "
        style={{ padding: "18px 0" }}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr20">
                    <Link className="header-logo logo2" to="/">
                      <img
                        src="/images/header-logo-dark.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  <a
                    className="login-info mr15"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe vam" />
                  </a>
                  <Navigation />
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <Link className="login-info mx15-lg mx30" to="/become-seller">
                    <span className="d-none d-xl-inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link className="login-info mr15-lg mr30" to="/login">
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-white2 add-joining at-home10"
                    to="/register"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation6 />
    </>
  );
}
