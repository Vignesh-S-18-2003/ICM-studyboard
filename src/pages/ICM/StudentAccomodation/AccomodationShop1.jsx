import ShopSingleAreaGallery from "@/components/element/ShopSingleAreaGallery";
import ShopSingleAreaInfo1 from "@/components/element/ShopSingleAreaInfo1";
import ShopSingleAreaProductInfo from "@/components/element/ShopSingleAreaProductInfo";
import AccomodationShopSingle from "./AccomodationShopSingle";


export default function AccomodationShop1() {
  return (
    <>
      <section className="shop-checkout pt40 pb90">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-6">
              <AccomodationShopSingle />
            </div>
            <div className="col-lg-6">
              <ShopSingleAreaProductInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
