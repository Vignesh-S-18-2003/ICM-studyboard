import React from 'react';
import Heros from './heros';
import Header17 from '@/components/header/Header17';
import OurFunFact2 from './OurFunFact2';
import CtaBanner11 from './CtaBanner11';
import NeedSomething2 from './NeedSomething2';
import CtaBanner4 from './CtaBanner4';
import FaqPayment from './FaqPayment';
import LearnFreeio1 from './LearnFreeio1';
import ContactPage from '@/pages/contact'

function VisaImmigration() {
  return (
    <div>
        <Header17 />
        <Heros />
        <OurFunFact2 />
        <CtaBanner11 />
        <NeedSomething2 />
        <CtaBanner4 />
        <br />
        <br />
        <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
                <LearnFreeio1 />
                <ContactPage />


    </div>
  );
}

export default VisaImmigration;