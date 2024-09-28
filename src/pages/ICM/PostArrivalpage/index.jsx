import React from 'react';
import Header17 from "@/components/header/Header17";
import Hero21 from '@/components/hero/Hero21';
import Hero14 from "@/components/hero/Hero14";
import MetaComponent from "@/components/common/MetaComponent";
import Testimonial3 from "@/components/section/Testimonial3";
import FaqPayment from "@/components/section/FaqPayment";
import ContactInfo1 from '@/components/section/ContactInfo1';
import Hero1 from '@/components/hero/Hero1';
// import Book from '../../../../ICM-studyboard/src/components/section/book'; // Ensure the import is correct

const metadata = {
    title: "Post Arrival",
};

function PostArrival() {
    return (
        <>
            <MetaComponent meta={metadata} />
            <Header17 />
            <PostArrival/>
            <div className="body_content">
                <Hero14 />
                <Testimonial3 />
                <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
            </div>
            
            {/* <Book /> Corrected component name */}
        </>
    );
}

export default PostArrival;
