import React from 'react';
import Header17 from '@/components/header/Header17';
import Heros from './heros';
import Section1 from './section1'; // Ensure correct import
import Section2 from './section2';
import Section3 from './section3';
import Maintest from './maintest';
import FaqPayment from './FaqPayment';
import ContactPage from '@/pages/contact'

function StudyAbroad5() {
  return (
    <div>
      <Header17 />
      <Heros />
      <br />
      <Section1 /> {/* Ensure this is capitalized */}
      <Section2 />
      <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <Section3 />
                    </div>
                </div>
                <Maintest />
                <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
                <ContactPage />


    </div>
  );
}

export default StudyAbroad5;