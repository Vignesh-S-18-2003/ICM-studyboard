import React from 'react'
import SAustralia from './SUKmain'
import Header17 from '@/components/header/Header17'
import ScholarshipSearch from '../Scholarship/ScholarshipSearch'
import ScholarshipArticles from '../Scholarship/ScholarshipArticle'
import ScholarshipFaqs from './ScholarshipFaq'
import ContactPage from '@/pages/contact'
import ScholarshipDialer from './ScholarshipDialer'
import ScholarshipAlumni from './ScholarshipAlumni'
import SAustraliaCourse from './SUKCourse'
import ScholarshipStudy from './ScholarshipStudy'
import ScholarshipUniversities from './ScholarshipUniversities'
import ScholarshipTable from './ScholarshipTable'
import ScholarshipAustraliaFact from './ScholarshipUkFact'
import SUk from './SUKmain'
import SUKCourse from './SUKCourse'
import ScholarshipDubaiFact from './ScholarshipUkFact'
import ScholarshipUKFact from './ScholarshipUkFact'

function ScholarshipUK() {
  return (
    <div>
        <Header17/>
      <SUk/>
      <ScholarshipSearch/>
      <SUKCourse/>
      <ScholarshipStudy/>
      <ScholarshipUniversities/>
      <ScholarshipTable/>
      <ScholarshipUKFact/>
      <ScholarshipAlumni/>
      <ScholarshipDialer/>
      <ScholarshipFaqs/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default ScholarshipUK
