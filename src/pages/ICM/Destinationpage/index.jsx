import React from 'react'
import DestinationMain from './Destinationmain'
import Header17 from '@/components/header/Header17'
import Destinationabout from './Destinationabout'
import DestinationStudy from './Destinationstudy'
import DestinationService from './DestinationService'
import DestinationGallery from './DestinationGallery'
import DestinationFaqs from './Destinationfaq'
import DestinationSearch from './DestinationSearch'
import DestinationServices from './Destinationervices'
import ContactPage from '@/pages/contact'
import DestinationSponsors from './DestinationSponsors'
import DestinationAlumni from './DestinationAlumni'
import DestinationStudies from './DestinationStudies'

function Destinationpage() {
  return (
    <div>
      <Header17/>
      <DestinationMain/>
      <Destinationabout/>
      <DestinationStudy/>
      <DestinationService />
      <DestinationGallery/>
      <DestinationSponsors/>
      <DestinationAlumni/>
      <DestinationSearch/>
      <DestinationStudies/>
      <DestinationFaqs/>
      <DestinationServices/>
      <ContactPage/>
    </div>
  )
}

export default Destinationpage
