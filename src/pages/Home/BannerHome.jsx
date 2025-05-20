import React from "react";
import ImageBanner from "../../assets/images/banner_desktop.png";
import { Link } from "react-router-dom";
import { listStats } from "../../API/dataHome";
import { Swiper, SwiperSlide } from "swiper/react";
const BannerHome = () => {
  return (
    <div className="section-banner__home bg-[#F2F0F1]">
      <div className="max-w-[1920px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={1.2}
          watchSlidesProgress={true}
          speed={600}
          className="slide-product-category"
        >
          <SwiperSlide>
            <div className="c-img pt-[40%]">
              <img
                src="https://theme.hstatic.net/200000690725/1001078549/14/slide_1_img.jpg?v=722"
                alt="Banner"
                title="Banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerHome;
