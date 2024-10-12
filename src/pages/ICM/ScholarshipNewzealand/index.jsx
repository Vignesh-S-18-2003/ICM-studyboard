import React from 'react'
// import SAustralia from './SAustrailamain'
import Header17 from '@/components/header/Header17'
import ScholarshipSearch from '../Scholarship/ScholarshipSearch'
import ScholarshipArticles from '../Scholarship/ScholarshipArticle'
import ScholarshipFaqs from './ScholarshipFaq'
import ContactPage from '@/pages/contact'
import ScholarshipDialer from './ScholarshipDialer'
import ScholarshipAlumni from './ScholarshipAlumni'
// import SAustraliaCourse from './SNewZealandCourse'
import ScholarshipStudy from './ScholarshipStudy'
import ScholarshipUniversities from './ScholarshipUniversities'
import ScholarshipTable from './ScholarshipTable'
// import ScholarshipAustraliaFact from './ScholarshipNewZealandFact'
import SNewZealandCourse from './SNewzCourse'
import SNewZealand from './SNewzmain'
import ScholarshipNewZealandFact from './ScholarshipNewzFact'

function ScholarshipNewZealand() {
  return (
    <div>
        <Header17/>
      <SNewZealand/>
      <ScholarshipSearch/>
      <SNewZealandCourse/>
      <ScholarshipStudy/>
      <ScholarshipUniversities/>
      <ScholarshipTable/>
      <ScholarshipNewZealandFact/>
      <ScholarshipAlumni/>
      <ScholarshipDialer/>
      <ScholarshipFaqs/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default ScholarshipNewZealand
