// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/bannerImgs/bike1.jpg";
import img2 from "../../../assets/bannerImgs/bike2.jpg";
import img3 from "../../../assets/bannerImgs/bike3.jpg";
import img4 from "../../../assets/bannerImgs/bike4.jpg";

const HeroBanner = () => {
  return (
    <div className="w-full mx-auto px-4 py-6">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            className="w-full h-[320px] md:h-[550px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt=""
            className="w-full h-[320px] md:h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt=""
            className="w-full h-[320px] md:h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt=""
            className="w-full h-[320px] md:h-[450px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
