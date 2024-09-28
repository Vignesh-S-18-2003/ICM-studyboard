import React from 'react'
import Header17 from "@/components/header/Header17";
import Hero16 from "@/components/hero/Hero16";
import MetaComponent from "@/components/common/MetaComponent";
import Hero1 from '@/components/hero/Hero1';
import Dreamdestination from './Dreamdestination';
import LandingExam from './LandingExams';
import ContactPage from '@/pages/contact';
import OurFaq1 from '@/components/section/OurFaq1';
import NeedSomething1 from '@/components/section/NeedSomething1';
import PopularCourse from './PopularCourse';
import LandingService from './LandingService';
import StudentEssentials from './StudentEssentials';

const metadata = {
  title: "ICM Study Abroad",
};

function Landingpage() {
  return (
    <>
    <MetaComponent meta={metadata} />
    <Header17 />
    <Hero1/>
    <Dreamdestination/>
    <LandingExam/>
    <NeedSomething1 />
    <LandingService/>
    <PopularCourse/>
    <StudentEssentials/>
    <OurFaq1/>
    <ContactPage/>
    {/* <div className="body_content">
      <Hero16 />
    </div> */}
  </>
  )
}

export default Landingpage
