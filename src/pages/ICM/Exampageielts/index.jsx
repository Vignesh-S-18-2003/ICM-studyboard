import Header17 from '@/components/header/Header17'
import React from 'react'
import Ieltsabout from './Ieltsabout'
import Ieltsblog from './ieltsblog'
import ContactPage from '@/pages/contact'
import IeltsFaqs from './Ieltsfaq'
import IeltsService from './Ieltsservice'
import IeltsResource from './Ieltsresource'
import IeltsSearch from './IeltsSearch'
import IeltsFact from './IeltsFact'
import ExamPattern from './ExamPattern'
import Examain from './Examain'
import IeltsWays from './IeltsWays'

function Examieltspage() {
  return (
    <div>
      <Header17/>
      <Examain/>
      <Ieltsabout/>
      <IeltsWays/>
      <Ieltsblog/>
      <ExamPattern/>
      <IeltsFact/>
      <IeltsResource/>
      <IeltsSearch/>
      <IeltsFaqs/>
      <IeltsService/>
      <ContactPage/>
    </div>
  )
}

export default Examieltspage
