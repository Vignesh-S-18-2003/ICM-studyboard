import Hero1 from "@/components/hero/Hero1";
import About1 from "@/components/section/About1";
import BrowserCategory1 from "@/components/section/BrowserCategory1";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner1 from "@/components/section/CtaBanner1";
import NeedSomething1 from "@/components/section/NeedSomething1";
import OurBlog1 from "@/components/section/OurBlog1";
import OurCta1 from "@/components/section/OurCta1";
import OurPartner1 from "@/components/section/OurPartner1";
import Testimonial1 from "@/components/section/Testimonial1";
import TrendingService1 from "@/components/section/TrendingService1";

import MetaComponent from "@/components/common/MetaComponent";
import Search1 from "@/components/element/Search1";
import CategoryDropdown1 from "@/components/dropdown/CategoryDropdown1";
import HeroSearch1 from "@/components/element/HeroSearch1";
import OurFaq1 from "@/components/section/OurFaq1";
import ContactPage from "../contact";
import Maincour from "@/components/maincour/Maincour";
import Mainstu from "@/components/mainstu/Mainstu";
import Mainservices from "@/components/mainservices/Mainservices";
import Mainsearch from "@/components/mainsearch/Mainsearch";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Home 1",
};

export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Hero1 />
      <Mainsearch/>
      <Mainservices/>
      <Maincour/>
      <Mainstu/>
      <NeedSomething1 />
      <OurFaq1/>
      {/* <CtaBanner1 />
      <CounterInfo1 />
      <Testimonial1 />
      <About1 />
      <OurBlog1 />
      <OurPartner1 />
      <OurCta1 /> */}
      <ContactPage/>

    </>
  );
}
