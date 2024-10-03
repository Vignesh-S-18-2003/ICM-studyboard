import React from 'react'
import Header17 from '@/components/header/Header17';
import Hero11 from './Hero11';
import Destinationabout from './Destinationabout';
import Destinationabout1 from './Destinationabout1';
import Elblog from './elblog';
import DestinationStudy from './Destinationstudy';
import CtaBanner18 from './CtaBanner18';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';
import CtaBanner11 from './CtaBanner11';
import OurPartner1 from './OurPartner1';
import LearnFreeio17 from './LearnFreeio17';
import FaqPayment from './FaqPayment';
import ContactPage from '@/pages/contact'

function EducationalLoan() {
    return (
      <div>
        <Header17 />
        <Hero11 />
        <Destinationabout />
        <Destinationabout1 />
        <Elblog />
        <DestinationStudy />
        <br /><br />
        <CtaBanner18/>
        <Testimonial1 />
        <Testimonial2 />
        <CtaBanner11/>
        <OurPartner1 />
        <LearnFreeio17 />
        <br />
        <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
                <ContactPage/>
        </div>
        

)
}

export default EducationalLoan;

