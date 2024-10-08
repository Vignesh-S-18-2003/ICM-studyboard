import React from 'react'
import Header17 from '@/components/header/Header17'
import AccomodationMain from './AccomodationMain'
import AccomodationAbout from './AccomodationAbout'
import AccomodationSearch from './AccomodationSearch'
import AccomodationCourse from './AccomodationCourse'
import ContactPage from '@/pages/contact'
import AccomodationBenefit1 from './AccomodationBenefit1'
import AccomodationBenefit2 from './AccomodationBenefit2'
import AccomodationWhat1 from './AccomodationWhat1'
import AccomodationWhat2 from './AccomodationWhat2'
import AccomodationBenefit3 from './AccomodationBenefit3'
import AccomodationBenefit4 from './AccomodationBenefit4'
import AccomodationTestimonals from './AccomodationTestimonals'
import AccomodationFaqs from './Accomodationfaq'
import AccomodationPartner from './AccomodationPartner'
import AccomodationDialer from './AccomodationDialer'
import AccomodationFact from './AccomodationFact'
import AccomodationTypes from './AccomodationTypes'
import AccomodationGallery1 from './AccomodationGallery1'
import AccomodationGallery2 from './AccomodationGallery2'
import AccomodationBlog from './AccomodationBlog'
import ShopSingleArea1 from '@/components/section/ShopSingleArea1'
import AccomodationShop1 from './AccomodationShop1'

function StudentAccomodation() {
    return (
        <div>
            <Header17 />
            <AccomodationMain />
            <AccomodationAbout />
            <AccomodationSearch/>
            <AccomodationCourse/>
            <AccomodationWhat1/>
            <AccomodationBenefit1/>
            <AccomodationBenefit2/>
            <AccomodationGallery1/>
            <AccomodationWhat2/>
            <AccomodationBenefit3/>
            <AccomodationBenefit4/>
            <AccomodationGallery2/>
            {/* <AccomodationShop1/> */}
            <AccomodationTypes/>
            <AccomodationBlog/>
            <AccomodationFact/>
            <AccomodationDialer/>
            <AccomodationPartner/>
            <AccomodationTestimonals/>
            <AccomodationFaqs/>
            <ContactPage/>
        </div>
    )
}

export default StudentAccomodation
