import Hero1 from '@/components/hero/Hero1'
import Hero14 from '@/components/hero/Hero14'
import Hero20 from '@/components/hero/Hero20'
import Hero21 from '@/components/hero/Hero21'
import FaqPayment from '@/components/section/FaqPayment'
import Testimonial3 from '@/components/section/Testimonial3'
import React from 'react'
import PostArrivalHero from './Postarrival'
import ContactPage from '@/pages/contact'
import Header17 from '@/components/header/Header17'
import PostArrivalTestimonial from './Postarrivaltestimonal'

function PostArrival() {
  return (
    <div>
      <Header17/>
      <PostArrivalHero/>
      <div className="body_content">
                <Hero14 />
                <PostArrivalTestimonial />
                <div className="row wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-lg-8 mx-auto">
                        <FaqPayment />
                    </div>
                </div>
            </div>
        <ContactPage />
    </div>
  )
}

export default PostArrival
