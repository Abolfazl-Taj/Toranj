import "./Download.css"
import app_photo from    '../../Assets/Imgs/AppPhoto.svg'
import Data_Download_Btn from "../../Assets/Data/Data_Download_Btn"
const Download = () => {
  return (
    <div className='Download'>
        <div className="App_photo">
        <img src={app_photo} alt="app_photo" className=" w-1/2" />
        </div>
        <ul className="Dowload_List">
            {Data_Download_Btn.map(item=>{
                return(
                    <li key={item.id}>
                        <button className="Download_Item">
                                <p>دریافت از</p>
                                <div className="Download_Info">
                                    <img src={item.icon} alt="" />
                                </div>
                        </button>
                    </li>
                )
            })}
        </ul>
        <div className="Download_Text">
            <h1 className="Download_Header">
            دانلود <span>اپلیکیشن</span> ترنج
            </h1>
            <p className="Download_Desc">با نصب اپلیکیشن ترنج راحت تر سفارشتو ثبت کن و از غذات لذت ببر.</p>
        </div>
    </div>
  )
}

export default Download