import Header17 from '@/components/header/Header17'
import React from 'react'
import AdmissionMain from './AdmissionMain'
import ContactPage from '@/pages/contact'
import AdmissionFaqs from './AdmissionFaq'
import AdmissionDialer from './AdmissionDialer'

function AdmissionAssistance() {
  return (
    <div>
    <Header17/>
    <AdmissionMain/>
    <AdmissionDialer/>
    <AdmissionFaqs/>
    <ContactPage/>
    </div>
  )
}

export default AdmissionAssistance
