import React from "react";

export default function CtaBanner13() {
  const data = [
    {
      id: 1,
      title: "Expert Test Preparation",
      description:
        "Receive comprehensive support in preparing for tests like SAT, ACT, GRE, and GMAT.",
    },
    {
      id: 2,
      title: "Admission Guidance",
      description:
        "Get personalized guidance to help you secure admission to leading universities worldwide.",
    },
    {
      id: 3,
      title: "Achieve Your Goals",
      description:
        "Our proven strategies and expert advice will help you achieve top scores and succeed in your applications.",
    },
  ];

  return (
    <section className="p-0">
      <div
        className="cta-banner3 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden"
        style={{
          backgroundColor: "orange", // Setting the background color to orange
          color: "white", // Setting the font color to white
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title" style={{ color: "white" }}>
                    What ICM Offers?
                    <br className="d-none d-xl-block" />
                    <br />
                    ICM StudyAbroad provides expert test preparation to help you
                    achieve top scores and secure admission to leading
                    universities.
                  </h2>
                </div>
              </div>
              <div className="why-chose-list pr60 pr0-lg">
                {data.map((elm) => (
                  <div
                    key={elm.id}
                    className="list-one d-flex align-items-start mb30"
                  >
                    <span
                      className="list-icon flex-shrink-0"
                      style={{ color: "white" }} // Icon color set to white
                    >
                      {elm.id}.
                    </span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1" style={{ color: "white" }}>
                        <b>{elm.title}</b>
                      </h4>
                      <p className="text mb-0 fz15" style={{ color: "white" }}>
                        {elm.description.split(" ").slice(0, 9).join(" ")}{" "}
                        <br className="d-none d-lg-block" />{" "}
                        {elm.description.split(" ").slice(9).join(" ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-5 wow fadeInLeft">
              <div className="home13-ctaimg-1">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="mb35"
                      src="/images/TestPreparation/tp2.png"
                      alt="image"
                    />
                    <img src="/images/TestPreparation/tp3.png" alt="image" />
                  </div>
                  <div>
                    <img
                      className="mb35"
                      src="/images/TestPreparation/tp4.png"
                      alt="image"
                    />
                    <img src="/images/TestPreparation/tp5.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
