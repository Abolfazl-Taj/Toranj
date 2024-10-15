import "./Hero.css"
import ham from '../../Assets/Imgs/headerpic.png'
import leaf from '../../Assets/Imgs/leaf.svg'
const Hero = () => {
  return (
    <div className='Hero Continer bg-[#A90E06] my-12 rounded-3xl py-16 px-20 flex justify-between relative overflow-hidden  '>
            <div className="Hero_Pic w-1/2  px-16  z-50">
                <img src={ham} alt="Here-Pic" className='w-[425px]' />
            </div>
            <div className="Hero_Content w-1/2 px-16 flex flex-col z-50   ">
              <h6 className="Hero_Title text-[#f1f1f1]/80 font-medium font-['Lalezar'] my-6  relative ">سفارش میپذیریم</h6>
              <h2 className="Hero_Header font-['Lalezar'] font-bold text-[#fff] my-2 text-[35px]  ">تجربه غذایی لذیذ و به یادماندنی</h2>
              <p className="Header_Desc   border-r-2  border-gray-600 font-['Lalezar'] pr-4 text-wrap text-justify my-2 text-[16px] text-[#ffff]/70 leading-9  ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی</p>
              <div className="Hero_Info w-full flex justify-center my-4 ">
                <button className="Hero_Btn px-10 py-3 bg-[#fff]/70 rounded-xl text-[#A90E06] font-['Lalezar'] ">اطلاعات رستوران</button>
              </div>

            </div>
          <img src={leaf} className="Lef_Leaf absolute left-[-15px] top-5 " alt="" />
          <img src={leaf} className="Right_Leaf absolute right-[-0px] bottom-10  " alt="" />
          <img src={leaf} className=" animatell absolute right-[10rem] top-0 rotate-9 " alt="" />
          <img src={leaf} className=" animatell absolute right-[15rem] top-0 rotate-180 " alt="" />
          <img src={leaf} className=" animatell absolute right-[33rem] top-0 rotate-45 " alt="" />
          <img src={leaf} className=" animatell absolute right-[41rem] top-0 rotate-90 " alt="" />
          <img src={leaf} className=" animatell absolute right-[55rem] top-0  rotate-12 " alt="" />
          <img src={leaf} className=" animatell absolute right-[25rem] top-0 rotate-9 " alt="" />
          <img src={leaf} className=" animatell absolute right-[35rem] top-0 rotate-180 " alt="" />
          <img src={leaf} className=" animatell absolute right-[63rem] top-0 rotate-45 " alt="" />
          <img src={leaf} className=" animatell absolute right-[91rem] top-0 rotate-90 " alt="" />
          <img src={leaf} className=" animatell absolute right-[85rem] top-0  rotate-12 " alt="" />
          <img src={leaf} className=" animatell absolute right-[51rem] top-0 rotate-90 " alt="" />
          <img src={leaf} className=" animatell absolute right-[95rem] top-0  rotate-12 " alt="" />
          <img src={leaf} className=" animatell absolute right-[105rem] top-0 rotate-9 " alt="" />
          <img src={leaf} className=" animatell absolute right-[95rem] top-0 rotate-9 " alt="" />



    </div>
  )
}

export default Hero