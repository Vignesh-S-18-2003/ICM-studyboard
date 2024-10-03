import Header17 from '@/components/header/Header17'
import React from 'react'
import ScholarshipMain from './Scholarshipmain'
import ScholarshipSearch from './ScholarshipSearch'
import ScholarshipService from './ScholarshipService'
import ScholarshipResource from './ScholarshipResource'
import ScholarshipTypes from './ScholarshipTypes'
import ContactPage from '@/pages/contact'
import ScholarshipArticles from './ScholarshipArticle'
import ScholarshipSponsors from './ScholarshipSponsors'
import ScholarshipTestimonial from './ScholarshipTestimonal'

function Scholarship() {
  return (
    <div>
      <Header17/>
      <ScholarshipMain/>
      <ScholarshipSearch/>
      <ScholarshipService/>
      <ScholarshipResource/>
      <ScholarshipTypes/>
      <ScholarshipSponsors/>
      <ScholarshipTestimonial/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default Scholarship
