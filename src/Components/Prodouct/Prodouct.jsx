import "./Prodouct.css";
import Data_Prodouct_Item from '../../Assets/Data/Data_Prodouct_Item'

const Prodouct = () => {
  return (
    <div className='Prodouct'>
        <h1 className="Prodouct_Cat">
            خدمات ترنج
        </h1>
        <ul className="Prodouct_List">
            {
                Data_Prodouct_Item.map(item=>{
                    return(
                        <li className="Prodouct_Item" key={item.id}>
                            <img src={item.pic} alt={item.header} />
                            <div className="Prodouct_Text">
                            <h1 className="Prodouct_Header">
                                {item.header}
                            </h1>
                            <p className="Prodouct_Desc">{item.desc}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Prodouct