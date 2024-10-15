import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Suggest_Slider.css";
const Suggest_Slider = () => {
  const [foodData, setFoodData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/persian").then((res) => {
      setFoodData(res.data);
      setIsPending(true);
    });
  }, []);
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={4}
        modules={[Navigation, Autoplay]}
        className="mySwiper my-14"
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {isPending ? (
          foodData.map((item) => {
            return (
              <SwiperSlide className="swiper-slide  px-4 p-6 Sug_Slide bg-[#f1f1f1] w-1/4 rounded-lg flex flex-col justify-center items-center shadow shadow-[#f9f9f9] ">
                <img className="w-1/2 my-3 h-[150px]" src={item.img} alt="" />
                <h3 className="my-3 font-bold text-[darkred] text-[22px]">
                  {item.header}
                </h3>
                <p className="text-[14px] w-full text-justify text-wrap my-1 h-[50px] text-black/40 ">
                  {item.desc}
                </p>
                <h6 className="my-5 text-zinc-600/50 border-b border-[darkred] pb-2 font-bold">
                  {item.pric}
                </h6>
                <button className="w-1/3 bg-[#a90e06] text-wrap font-bold px-3 py-1 text-white rounded ">
                  سفارش غذا
                </button>
              </SwiperSlide>
            );
          })
        ) : (
          <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.7s]"></div>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default Suggest_Slider;
