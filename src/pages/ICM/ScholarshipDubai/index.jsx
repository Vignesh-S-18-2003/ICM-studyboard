import React from 'react'
import SAustralia from './SAustrailamain'
import Header17 from '@/components/header/Header17'
import ScholarshipSearch from '../Scholarship/ScholarshipSearch'
import ScholarshipArticles from '../Scholarship/ScholarshipArticle'
import ScholarshipFaqs from './ScholarshipFaq'
import ContactPage from '@/pages/contact'
import ScholarshipDialer from './ScholarshipDialer'
import ScholarshipAlumni from './ScholarshipAlumni'
import SAustraliaCourse from './SDubaiCourse'
import ScholarshipStudy from './ScholarshipStudy'
import ScholarshipUniversities from './ScholarshipUniversities'
import ScholarshipTable from './ScholarshipTable'
import ScholarshipAustraliaFact from './ScholarshipDubaiFact'
import SDubaiCourse from './SDubaiCourse'
import SDubai from './SDubaimain'
import ScholarshipDubaiFact from './ScholarshipDubaiFact'

function ScholarshipDubai() {
  return (
    <div>
        <Header17/>
      <SDubai/>
      <ScholarshipSearch/>
      <SDubaiCourse/>
      <ScholarshipStudy/>
      <ScholarshipUniversities/>
      <ScholarshipTable/>
      <ScholarshipDubaiFact/>
      <ScholarshipAlumni/>
      <ScholarshipDialer/>
      <ScholarshipFaqs/>
      <ScholarshipArticles/>
      <ContactPage/>
    </div>
  )
}

export default ScholarshipDubai
