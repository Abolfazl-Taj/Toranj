import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Data_Branch from "../../Assets/Data/Data_Branch";
import "./Branch.css";
import "swiper/css";
const BranchSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper Branch_SlideShow"
      >
        {Data_Branch.map((item) => {
          return (
            <SwiperSlide className="swiper-slide Branch_Slider flex flex-col justify-center items-center " key={item.id}>
              <img src={item.pic} alt="" />
              <div className="Branch_Text">
                <h1 className="Branch_Header">{item.header}</h1>
                <div className="Branch_Phone">
                  <p className=" Branch_Phone border-l-4 border-[#a90e06] mx-1   pl-1 ">{item.phone1}</p>
                  <p className=" Branch_Phone  mx-1 ">{item.phone2}</p>
                </div>
                <h6 className="Branch_Loc">{item.address}</h6>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BranchSlider;
