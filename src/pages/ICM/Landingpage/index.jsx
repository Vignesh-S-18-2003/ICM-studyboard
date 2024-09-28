import React from 'react'
import Header17 from "@/components/header/Header17";
import Hero16 from "@/components/hero/Hero16";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "ICM Study Abroad",
};

function Landingpage() {
  return (
    <>
    <MetaComponent meta={metadata} />
    <Header17 />
    <div className="body_content">
      <Hero16 />
    </div>
  </>
  )
}

export default Landingpage
