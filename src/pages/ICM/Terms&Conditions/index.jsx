import React from "react";
import { Link } from "react-router-dom"; // Ensure you are using this for navigation

export default function TermsAndConditions() {
  return (
    <section className="terms-and-conditions">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="main-title text-center">
              <h2 className="title">Terms and Conditions</h2>
              <p className="paragraph mt20">
                Please read these Terms and Conditions carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt50">
          <div className="col-xl-10 mx-auto">
            <div className="content-box bgc-white  p30-sm default-box-shadow1 bdrs12">

              {/* Section 1: Agreement to Terms */}
              <div className="mb30">
                <h4>1. Agreement to Terms</h4>
                <p>
                  By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </div>

              {/* Section 2: Services Provided */}
              <div className="mb30">
                <h4>2. Services Provided</h4>
                <p>
                  We provide study abroad consultancy services to assist students in applying to international universities. Our services include counseling, application guidance, visa processing assistance, and accommodation support. The scope of our services may vary based on the package selected.
                </p>
              </div>

              {/* Section 3: Fees and Payments */}
              <div className="mb30">
                <h4>3. Fees and Payments</h4>
                <p>
                  All fees for our consultancy services are outlined in the service agreement. Payments must be made in accordance with the agreed schedule. Failure to complete payments may result in the termination of our services. No refunds will be issued after services have been rendered, unless otherwise agreed in writing.
                </p>
              </div>

              {/* Section 4: User Responsibilities */}
              <div className="mb30">
                <h4>4. User Responsibilities</h4>
                <p>
                  You are responsible for providing accurate and complete information during the application process. Failure to provide required documents or false information may affect your application process, and we will not be held liable for any negative outcomes resulting from such errors.
                </p>
              </div>

              {/* Section 5: Limitation of Liability */}
              <div className="mb30">
                <h4>5. Limitation of Liability</h4>
                <p>
                  We make no guarantees regarding the outcome of your applications. While we offer expert advice and guidance, final decisions regarding university admissions, visa approvals, and scholarships are made by external entities. We are not responsible for any loss, damage, or delay caused by third-party actions.
                </p>
              </div>

              {/* Section 6: Privacy Policy */}
              <div className="mb30">
                <h4>6. Privacy Policy</h4>
                <p>
                  We are committed to protecting your privacy and personal data. Information collected during the consultancy process will be used solely for the purpose of assisting with your study abroad applications. We do not share your information with third parties unless necessary for the application process. Please refer to our <Link to="/privacy-policy" className="text-thm">Privacy Policy</Link> for more details.
                </p>
              </div>

              {/* Section 7: Termination of Services */}
              <div className="mb30">
                <h4>7. Termination of Services</h4>
                <p>
                  Either party may terminate the consultancy agreement at any time by providing written notice. Upon termination, all outstanding fees must be settled, and any services rendered up to the termination date will remain non-refundable.
                </p>
              </div>

              {/* Section 8: Intellectual Property */}
              <div className="mb30">
                <h4>8. Intellectual Property</h4>
                <p>
                  All content on our website, including text, images, graphics, and logos, is the intellectual property of our consultancy. You may not reproduce, distribute, or use any content without our prior written consent.
                </p>
              </div>

              {/* Section 9: Governing Law */}
              <div className="mb30">
                <h4>9. Governing Law</h4>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms shall be resolved in the courts of [Your Jurisdiction].
                </p>
              </div>

              {/* Section 10: Changes to Terms */}
              <div className="mb30">
                <h4>10. Changes to Terms</h4>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review these terms periodically for updates.
                </p>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <p className="mt20">
                  If you have any questions about these Terms and Conditions, please <Link to="/contact" className="text-thm">Contact Us</Link>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
