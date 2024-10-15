import "./Contact.css";
import Data_Contact from "../../Assets/Data/Data_Contact";
import { FaArrowLeftLong } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="Contacts">
      <h1 className="Comments_Header">
        <span> ارتباط با ما</span>
        <hr />
      </h1>
      <div className="Contacts_Cont">
        {Data_Contact.map((item) => {
          return <div className="Contact" key={item.id} >
            <div className="Contact_Info">
                <h1 className="Contact_Header">
                    <i>{item.icon}</i>
                    در
                    <span>{item.name}</span>
                </h1>
                <h4 className="Contact_Fallow">ترنج را دنبال کنید</h4>
            </div>
            <div className="Moreinfo_Contact">
            <button className="Contact_Btn">
                <FaArrowLeftLong/>
            </button>
            </div>
          </div>;
        })}
      </div>
      <form action="" className="Contact_Form">
      <h2 className="Form_Header">باما در ارتباط باشید</h2>
        <div className="Contact_Info_Input">
          <div className="Contact_Input_Cont">
            <label htmlFor="name">نام و نام خانوادگی:</label>
          <input type="text" id="name" className="Contact_Input" placeholder="ابولفضل تاج" />
          </div>
          <div className="Contact_Input_Cont">
            <label htmlFor="phone">شماره ی تماس:</label>
          <input type="text" className="Contact_Input"id="phone" placeholder="0912123456789" />
          </div>
        </div>
        <div className="Contact_Input_Cont">
            <label htmlFor="select">موضوع درخواستی:</label>
            <select className="Contact_Select" name="" id="select">
                <option className="Contact_Option" value="critic">انتقاد</option>
                <option className="Contact_Option" value="sug">پیشنهاد</option>
            </select>
        </div>
        <div className="Contact_Input_Cont">
        <label htmlFor="text_area">متن پیام:</label>
        <textarea name="" className="Contact_TextArea" id="text_area" placeholder="متن پیام را وارد کنید"></textarea>
        </div>
        <button className="ContactF_Btn">ارسال پیام</button>
      </form>
    </div>
  );
};

export default Contact;
