import HeroSearch1 from '@/components/element/HeroSearch1';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function SimcardDialer() {
    const role = [
        "Choose Category",
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "Music & Audio",
        "Programming & Tech",
      ];
      
      const partners = [
        "/images/partners/1.png",
        "/images/partners/2.png",
        "/images/partners/3.png",
        "/images/partners/4.png",
      ];
    const [getSelectedRole, setSelectedRole] = useState(null);

    // choose a category
    const roleHandler = (select) => {
      setSelectedRole(select);
    };
  
    const navigate = useNavigate();
  
    // search handler
    const searchHandler = () => {
      navigate("/job-1");
    };
  return (
    <div className='text-center pt100'>
    <h1>Get your doubts  </h1>
    <h1>clarified now for free</h1>
        <div className="advance-search-tab at-home3 searchcomponent default-box-shadow1 bgc-white bgct-sm bdrn-sm p5 p0-md bdrs4 position-relative zi9 animate-up-3">
                  
                  <div className="row">
                    <div className="col-md-9 col-lg-9 col-xl-9">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-lg-4 col-xl-3 d-none d-md-block">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div
                          className="dropdown bootstrap-select"
                          style={{ width: "80%" }}
                        >
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {getSelectedRole !== null
                                    ? getSelectedRole
                                    : "Choose Category"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="inner show">
                              <ul className="dropdown-menu inner show">
                                {role.map((item, index) => (
                                  <li
                                    onClick={() => roleHandler(item)}
                                    key={index}
                                    className="selected active"
                                  >
                                    <a
                                      className={`dropdown-item selected ${
                                        getSelectedRole === item ? "active" : ""
                                      }`}
                                    >
                                      <span className="text">{item}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-3 col-lg-2 col-xl-3">
                      <div className="text-center text-xl-end">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-home3 w-100-sm"
                          type="button"
                        >
                          Request callback
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
  )
}

export default SimcardDialer
