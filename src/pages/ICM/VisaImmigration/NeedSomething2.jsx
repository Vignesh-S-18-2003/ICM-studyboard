import AllTimeSelling from "./AllTimeSelling";

export default function NeedSomething2() {
  return (
    <>
      <section className="our-features pb90 pb30-md pt60">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2>Our Services</h2>
                <p className="text">
                  Discover our most viewed and top-selling services tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <AllTimeSelling />
        </div>
      </section>
    </>
  );
}
