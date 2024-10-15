import "./Menu.css"
import Navbar from '../../Components/Navbar/Navbar'
import {NavLink, Outlet } from 'react-router-dom'
import Data_Food_Route from '../../Assets/Data/Data_Food_Route'
import Off from "../../Components/Off/Off"
import Suggest from "../../Components/Suggest/Suggest"
const Menu = () => {
  return (
    <div className='Menu_Page'>
      <Navbar></Navbar>
      <ul className="Food_Menu">

        {Data_Food_Route.map(data =>{
          return(
            <NavLink className="Food_Route" to={`${data.to}`} key={data.id} >
              <div className="Food_Continer">
              <img src={data.pic} alt="Food_Icon" className="Food_Icon" />
              <h6 className="Food_Name">{data.text}</h6>
              </div>
            </NavLink>
          )
        })}
      </ul>
        <Outlet  data-aos="fade-up"  />
        <Off/>
        <Suggest/>
    </div>
  )
}


export default Menu