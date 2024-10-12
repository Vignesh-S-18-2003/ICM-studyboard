import React from 'react'
import SAustralia from './SAustrailamain'
import Header17 from '@/components/header/Header17'
import ScholarshipSearch from '../Scholarship/ScholarshipSearch'
import ScholarshipArticles from '../Scholarship/ScholarshipArticle'
import ScholarshipFaqs from './ScholarshipFaq'
import ContactPage from '@/pages/contact'
import ScholarshipDialer from './ScholarshipDialer'
import ScholarshipAlumni from './ScholarshipAlumni'
import SAustraliaCourse from './SAustraliaCourse'
import ScholarshipStudy from './ScholarshipStudy'
import ScholarshipUniversities from './ScholarshipUniversities'
import ScholarshipTable from './ScholarshipTable'
import ScholarshipAustraliaFact from './ScholarshipAustraliaFact'

function ScholarshipIreland() {
  return (
    <div>
        <Header17/>
      <SAustralia/>
      <ScholarshipSearch/>
      <SAustraliaCourse/>
      <ScholarshipStudy/>
      <ScholarshipUniversities/>
      <ScholarshipTable/>
      <ScholarshipAustraliaFact/>
      <ScholarshipAlumni/>
      <ScholarshipDialer/>
      <ScholarshipFaqs/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default ScholarshipIreland
