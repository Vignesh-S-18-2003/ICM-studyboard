import Hero2 from "@/components/hero/Hero2";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import CtaBanner2 from "@/components/section/CtaBanner2";
import HighestRated1 from "@/components/section/HighestRated1";
import LearnFreeio1 from "@/components/section/LearnFreeio1";
import NeedSomething2 from "@/components/section/NeedSomething2";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService1 from "@/components/section/PopularService1";
import PriceTable1 from "@/components/section/PriceTable1";

import MetaComponent from "@/components/common/MetaComponent";
import BecameSellerPage from "@/pages/become-seller";
import Examwhat from "@/components/examwhat/Examwhat";
import OurBlog2 from "@/components/section/OurBlog2";
import Registerimg from "@/components/registerimg/Registerimg";
import Pattern from "@/components/pattern/Pattern";
import Searchcomponent from "@/components/searchcomponent/searchcomponent";
import OurFaq2 from "@/components/section/OurFaq2";
import PopularServicex from "@/components/section/PopularServicex";
import ContactPage from "@/pages/contact";


const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Home 2",
};

export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
            <Examwhat/>
      <OurBlog2/>
      <Registerimg />
      <Pattern/>
      <Searchcomponent/>
      <OurFaq2/>
      <PopularServicex/>
      <ContactPage/>
    </>
  );
}
