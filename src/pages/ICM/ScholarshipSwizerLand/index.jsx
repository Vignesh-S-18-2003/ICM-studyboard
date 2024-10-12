import React from 'react'
// import SAustralia from './SAustrailamain'
import Header17 from '@/components/header/Header17'
import ScholarshipSearch from '../Scholarship/ScholarshipSearch'
import ScholarshipArticles from '../Scholarship/ScholarshipArticle'
import ScholarshipFaqs from './ScholarshipFaq'
import ContactPage from '@/pages/contact'
import ScholarshipDialer from './ScholarshipDialer'
import ScholarshipAlumni from './ScholarshipAlumni'
// import SAustraliaCourse from './SSwizerLandCourse'
import ScholarshipStudy from './ScholarshipStudy'
import ScholarshipUniversities from './ScholarshipUniversities'
import ScholarshipTable from './ScholarshipTable'
// import ScholarshipAustraliaFact from './ScholarshipSwizerLandFact'
import SSwizerLandCourse from './SSwizCourse'
import SSwizerLand from './SSwizmain'
import ScholarshipSwizerLandFact from './ScholarshipSwizFact'

function ScholarshipSwizerLand() {
  return (
    <div>
        <Header17/>
      <SSwizerLand/>
      <ScholarshipSearch/>
      <SSwizerLandCourse/>
      <ScholarshipStudy/>
      <ScholarshipUniversities/>
      <ScholarshipTable/>
      <ScholarshipSwizerLandFact/>
      <ScholarshipAlumni/>
      <ScholarshipDialer/>
      <ScholarshipFaqs/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default ScholarshipSwizerLand
