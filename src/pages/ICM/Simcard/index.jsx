import Header17 from '@/components/header/Header17'
import React from 'react'
import SimcardMain from './SimcardMain'
import SimcardAbout from './SimCardAbout'
import SimcardBlog from './SimcardBlog'
import SimcardDialer from './SimcardDialer'
import ContactPage from '@/pages/contact'
import SimcardTestimonals from './SimcardTestimonals'

function Simcard() {
  return (
    <div>
      <Header17/>
      <SimcardMain/>
      <SimcardAbout/>
      <SimcardBlog/>
      <SimcardTestimonals/>
      <SimcardDialer/>
      <ContactPage/>
    </div>
  )
}

export default Simcard
