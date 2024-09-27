import React from 'react'

import servimg from '../../../public/images/servimg/serv-img.png';
function Mainservices() {
  return (
    <div className="main-services">
        <div className="main-serv1">
          <img src={servimg} />
        </div>
        <div className="main-serv2">
          <h1>Our Services</h1>
          <div className="serv-des">
            <div><h1><i class="fa-solid fa-graduation-cap"></i></h1><h2>University Selection</h2><h4>We provide guidance on selecting universities or colleges based on the student's academic profile, budget, and preferences.</h4></div>
            <div><h1><i class="fa-solid fa-building"></i></h1><h2>Admission Assistance </h2><h4>Our counselors assist students in preparing application materials and ensuring they meet admission requirements.</h4></div>
          </div>
          <div className="serv-des">
            <div><h1><i class="fa-solid fa-file-circle-check"></i></h1><h2>Test Preparation</h2><h4>We may offer resources and coaching for standardized tests required for admission, such as the TOEFL, IELTS, GRE or GMAT.</h4></div>
            <div><h1><i class="fa-solid fa-headset"></i></h1><h2>Visa and Immigration Support</h2><h4>Our counselors guide students through the visa application process, ensuring they have all necessary documents and understand immigration regulations.</h4></div>
          </div>
          <div className="serv-des">
            <div><h1><i class="fa-solid fa-plane-departure"></i></h1><h2>Pre-departure Orientation</h2><h4>Our counsellors offer guidance on practical aspects of living and studying abroad, such as accommodation, healthcare, cultural differences, and safety.</h4></div>
            <div><h1><i class="fa-solid fa-plane-arrival"></i></h1><h2>Post-arrival Support</h2><h4>Our consultancy services offer assistance to students even after they arrive in their study destination, helping them settle in and addressing any issues they encounter.</h4></div>
          </div>
        </div>
      </div>
  )
}

export default Mainservices
