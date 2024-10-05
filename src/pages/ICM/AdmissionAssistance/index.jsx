import Header17 from '@/components/header/Header17'
import React from 'react'
import AdmissionMain from './AdmissionMain'
import ContactPage from '@/pages/contact'
import AdmissionFaqs from './AdmissionFaq'
import AdmissionDialer from './AdmissionDialer'
import AdmissionCategory1 from './AdmissionCategory1'
import AdmissionCategory2 from './AdmissionCategory2'
import AdmissionLearn from './AdmissionLearn'

function AdmissionAssistance() {
  return (
    <div>
    <Header17/>
    <AdmissionMain/>
    <AdmissionCategory1/>
    <AdmissionCategory2/>
    <AdmissionLearn/>
    <AdmissionDialer/>
    <AdmissionFaqs/>
    <ContactPage/>
    </div>
  )
}

export default AdmissionAssistance
