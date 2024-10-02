import React from "react";

// Data for steps related to test preparation services
const steps = [
  {
    id: 1,
    title: "Practice Tests and Mock Exams",
    description:
      "Test your knowledge with our practice tests and mock exams to gauge your readiness.",
    iconClass: "flaticon-cv", // Icon representing exams or tests
  },
  {
    id: 2,
    title: "Group Classes",
    description:
      "Learn in an interactive setting with peers, guided by experienced instructors.",
    iconClass: "flaticon-secure", // Icon representing group learning or classes
  },
  {
    id: 3,
    title: "Customized Study Plans",
    description:
      "Tailored study plans to match your strengths, weaknesses, and goals.",
    iconClass: "flaticon-web-design", // Icon representing study plans or personalized learning
  },
  {
    id: 4,
    title: "One-on-One Tutoring",
    description:
      "Receive personalized guidance with one-on-one tutoring sessions from experts.",
    iconClass: "flaticon-customer-service", // Icon representing individual tutoring or guidance
  },
];

export default function CtaBanner17() {
  return (
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title text-center">
              <h2>Features Of Program</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {steps.map((elm, i) => (
            <div key={i} className="col-sm-6 col-lg-3">
              <div
                className={`iconbox-style1 at-home17-v1 ${
                  i + 1 !== steps.length ? "after_style" : ""
                } p-0 text-center`}
              >
                <div className="icon before-none">
                  <span className={elm.iconClass}></span> {/* Display icon */}
                </div>
                <div className="details">
                  <h4 className="title mt10 mb-3">{elm.title}</h4>
                  <p className="text">
                    {elm.description.split(" ").slice(0, 10).join(" ")}
                    <br className="d-none d-xxl-block" />
                    {elm.description.split(" ").slice(10).join(" ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
