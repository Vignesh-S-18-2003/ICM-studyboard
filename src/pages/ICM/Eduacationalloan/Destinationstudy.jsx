import React from 'react';

// Reusable Button Component
const ActionButton = ({ onClick, children }) => (
  <button
    style={{
      backgroundColor: '#FFA500',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#FF8C00';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#FFA500';
      e.target.style.transform = 'scale(1)';
    }}
    className="mb-1"
    onClick={onClick}
  >
    <h6 className="app-title mb-0 fz15">{children}</h6>
  </button>
);

export default function DestinationStudy() {
  return (
    <>
      <div className="col-lg-9 mx-auto pt90">
        <div className="main-title text-center mb30">
          <h1>Types of Educational Loans!</h1>
        </div>
      </div>

      {/* Section 1: Collateral Based Education Loan */}
      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-75 h-auto"
                  src="/images/EducationalLoan/e5.png"
                  alt="Image depicting a Collateral Based Education Loan"
                />
              </div>
            </div>
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb10">Collateral Based Education Loan</h2>
                <p className="cta-text mb40">
                  Collateral-based education loans generally offer the lowest interest rates and processing fees among lenders. These loans come with relaxed criteria for parental or co-signer income and provide a full moratorium during the study period, making them a cost-effective option for financing your education.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <ActionButton onClick={() => console.log('Get Started')}>
                        Get Started
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Non Collateral Based Education Loan */}
      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb10">Non Collateral Based Education Loan</h2>
                <p className="cta-text mb30">
                  NBFCs, private banks, and select nationalized banks offer non-collateral education loans for studying abroad. While these loans come with stricter criteria for both the student and co-signer profiles and often have higher interest rates compared to collateral-based loans, they are popular for their convenience and faster approval process.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <ActionButton onClick={() => console.log('Get Started')}>
                        Get Started
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-100 h-auto"
                  src="/images/EducationalLoan/e6.png"
                  alt="Image depicting a Non Collateral Based Education Loan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Non Co-signor Based Education Loan */}
      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-75 h-auto"
                  src="/images/EducationalLoan/e7.png"
                  alt="Image depicting a Non Co-signor Based Education Loan"
                />
              </div>
            </div>
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb15">Non Co-signor Based Education Loan</h2>
                <p className="cta-text mb60">
                  These loans are typically offered by specific banks or financial institutions based on the student's academic potential, future earning prospects, or country of study. They provide an option for students who may not have access to a co-signer but still need financial support to pursue their education abroad.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <ActionButton onClick={() => console.log('Get Started')}>
                        Get Started
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Foreign Banks Based Education Loans */}
      <section className="maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <h2 className="cta-title mb10">Foreign Banks Based Education Loans</h2>
                <p className="cta-text mb40">
                  Foreign banks offer education loans directly to students looking to study abroad. While they provide competitive rates and flexible repayment options, they may require students to demonstrate financial independence and a good credit history. These loans are ideal for students seeking to leverage international banking relationships for their educational financing.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <ActionButton onClick={() => console.log('Get Started')}>
                        Get Started
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <img
                  className="w-75 h-auto"
                  src="/images/EducationalLoan/e8.png"
                  alt="Image depicting Foreign Banks Based Education Loans"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
