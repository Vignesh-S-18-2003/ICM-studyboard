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

function Destinationpage() {
  return (
    <div>
      <Header17/>
      <DestinationMain/>
      <Destinationabout/>
      <DestinationStudy/>
      <DestinationService />
      <DestinationGallery/>
      <DestinationFaqs/>
      <DestinationSearch/>
      <DestinationServices/>
      <ContactPage/>
    </div>
  )
}

export default Destinationpage
