import Header17 from '@/components/header/Header17'
import React from 'react'
import ForexMain from './ForexMain'
import ForexAbout from './ForexAbout'
import ForexBlog from './ForexBlog'
import ForexDialer from './ForexDialer'
import ContactPage from '@/pages/contact'
import ForexTestimonals from './ForexTestimonals'

function Forex() {
  return (
    <div>
      <Header17/>
      <ForexMain/>
      <ForexAbout/>
      <ForexBlog/>
      <ForexTestimonals/>
      <ForexDialer/>
      <ContactPage/>
    </div>
  )
}

export default Forex
