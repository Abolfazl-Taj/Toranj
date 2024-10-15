import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Off.css"
import Data_Off from '../../Assets/Data/Data_Off';
const Off = () => {
  return (
    <>
      <h1 className="Comments_Header Off_Header ">
    <span> تخفیف ویژه</span>
    <hr />
  </h1>
    <div className="Off">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper Off_Slider overflow-y-visible"
      >

            {Data_Off.map(item=>{
                return(
                    <SwiperSlide className='h-full flex flex-col items-center overflow-y-visible shadow-2xl rounded '>
                           <div className="flex flex-col justify-center items-center font-['Lalezar'] font-bold " key={item.id}>
                        <img src={item.pic} className='h-16 w-16 my-1' alt="Food_Pic" />
                        <h1 className="text-[22px] text-white my-1 ">{item.foodname}</h1>
                        <h6 className="text-[18px] text-zinc-400 font-medium  ">{item.price}</h6>
                            <p className="w-1/3 h-10 border border-yellow-300 text-yellow-500 font-bold text-[18px] my-4 flex justify-center items-center rounded-xl ">5%</p>
                        <button className="bg-[darkred] text-white my-1 w-1/2 p-2 rounded">سفارش غذا</button>
                    </div>
                    </SwiperSlide>
                 
                )
            })}



      </Swiper>
    </div>
    
    </>
  )
}

export default Off