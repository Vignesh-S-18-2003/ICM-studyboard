import React from 'react'
import Header17 from '@/components/header/Header17'
import AccomodationMain from './AccomodationMain'
import AccomodationAbout from './AccomodationAbout'
import AccomodationSearch from './AccomodationSearch'
import AccomodationCourse from './AccomodationCourse'
import ContactPage from '@/pages/contact'

function StudentAccomodation() {
    return (
        <div>
            <Header17 />
            <AccomodationMain />
            <AccomodationAbout />
            <AccomodationSearch/>
            <AccomodationCourse/>
            <ContactPage/>
        </div>
    )
}

export default StudentAccomodation
