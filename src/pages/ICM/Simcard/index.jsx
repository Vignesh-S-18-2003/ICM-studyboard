import Header17 from '@/components/header/Header17'
import React from 'react'
import SimcardMain from './SimcardMain'
import SimcardAbout from './SimCardAbout'
import SimcardBlog from './SimcardBlog'
import SimcardDialer from './SimcardDialer'
import ContactPage from '@/pages/contact'
import SimcardTestimonals from './SimcardTestimonals'
import SimCardTable from './SimcardTable'
import SimComponent1 from './SimComponent1'
import SimComponent2 from './SimComponent2'
import SimComponent3 from './SimComponent3'

function Simcard() {
  return (
    <div>
      <Header17/>
      <SimcardMain/>
      <SimcardAbout/>
      <SimcardBlog/>
      <SimComponent1/>
      <SimCardTable/>
      <SimComponent2/>
      <SimCardTable/>
      <SimComponent3/>
      <SimCardTable/>
      <SimcardDialer/>
      <ContactPage/>
    </div>
  )
}

export default Simcard
