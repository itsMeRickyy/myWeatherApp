import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
// import Slider from "react-slick";
function SwiperContainer() {
  return (
    <>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="bg-slate-200 ">
          <SwiperSlide className="bg-green-200">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-red-200">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-yellow-100">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-purple-200">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperContainer;
