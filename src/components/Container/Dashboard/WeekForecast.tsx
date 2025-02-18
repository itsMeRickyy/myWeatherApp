import { weekForecast } from "../../../services/WeekForecast";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "../../../store/useStore";
import WeekForecastCard from "../../Card/WeekForecastCard";
// import SwiperContainer from "./SwiperContainer";

import "swiper/css";

function WeekForecast() {
  const { week } = weekForecast;
  const { toggle } = useStore();
  const generateId = () => Math.floor(Math.random() * 1000);

  return (
    <div className=" w-[31vw]  md:w-[50vw] lg:w-[57vw] xl:w-[60vw]  relative flex flex-col gap-8">
      <h1 className={toggle ? `text-white text-xl` : `text-gray-700 text-xl`}>Week Forecast</h1>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={85}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
          className="mySwiper ">
          {week.map(day => (
            <SwiperSlide key={generateId()}>
              <WeekForecastCard day={day.day.substring(0, 3)} icon={day.icon} temp={`${day.temperature.min} ° - ${day.temperature.max} °`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WeekForecast;

// sm:w-[250px] md:w-[430px] mdlg:w-[470px] lg:w-[620px] xl:w-[1000px] 2xl:w-[1000px]
