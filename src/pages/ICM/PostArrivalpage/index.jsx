import React from 'react';
import Header17 from "@/components/header/Header17";
import Hero21 from '@/components/hero/Hero21';
import Hero14 from "@/components/hero/Hero14";
import MetaComponent from "@/components/common/MetaComponent";
import Testimonial3 from "@/components/section/Testimonial3";
import FaqPayment from "@/components/section/FaqPayment";
import FaqSuggestion from "@/components/section/FaqSuggestion"; // Ensure this is imported

const metadata = {
    title: "Post Arrival",
};

function PostArrival() {
    return (
        <>
            <MetaComponent meta={metadata} />
            <Header17 />
            <div className="body_content">
                <Hero21 />
                <Hero14 />
                <Testimonial3 />
                <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostArrival;
