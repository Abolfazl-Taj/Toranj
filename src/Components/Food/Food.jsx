import { useEffect, useState } from "react";
import { IoMdArrowDropleft , IoMdArrowDropright } from "react-icons/io";

import { useParams } from "react-router-dom";
import "./Food.css";
import Data_Food_Route from "../../Assets/Data/Data_Food_Route";
import useFetch from "../../Assets/Hooks/useFetch";
import ReactPaginate from 'react-paginate';
const Food = () => {
  const Id = useParams().FoodId;
  let [paginate , setPaginate] = useState(1)
  const handlePageClick = (pagenumber)=>{
    setPaginate(pagenumber.selected +1)
  }
  
  let [foodData, isPending] = useFetch(`http://localhost:5000/${Id}?_page=${paginate}&_per_page=3`, "get");
  const [foodcat, setFoodcat] = useState("");
  useEffect(() => {
    setFoodcat(Data_Food_Route.find((item) => item.to === String(Id)).text);
    console.log(foodData);
    
  }, [Id ,paginate]);

  return (
    <div className="Food_List">
      <h1 className="Food_Cat">{foodcat}</h1>
      <div className="Food_List">
        {isPending ? (
          foodData.data.map((data) => {
            return (
              <div
                className="Food"
                data-aos="zoom-in"
                data-aos-duration="500"
                key={data.id}
              >
                <div className="Food_Top">
                  <img src={`${data.img}`} className="Food_Pic" alt="" />
                  <div className="Food_Text">
                    <h2 className="Food_Header">{data.header}</h2>
                    <p className="Food_Desc">{data.desc}</p>
                  </div>
                </div>
                <div className="Food_Bottom">
                  <h6 className="Food_Price">{data.pric}</h6>
                </div>
              </div>
            );
          })
        ) : (
          <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-[#a90e06] animate-bounce [animation-delay:.7s]"></div>
          </div>
        )}
      </div>
      <ReactPaginate 
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel= <IoMdArrowDropright/>
        previousLabel=<IoMdArrowDropleft/>
        pageCount={Math.ceil(foodData.items / 3 )}
        containerClassName="Paginate_Cont"
        pageClassName="Paginate_Page"
        activeClassName	="active"
        pageLinkClassName="Paginate_Page"
        activeLinkClassName="active"
        nextClassName="Paginate_Btn"
        nextLinkClassName="Paginate_Btn"
        previousLinkClassName="Paginate_Btn"
        previousClassName="Paginate_Btn"
        disabledClassName="Paginate_Disable"
        disabledLinkClassName="Paginate_Disable"
      />
    </div>
  );
};

export default Food;
