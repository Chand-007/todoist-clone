import '../../styles/Title.css'
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineRectangle } from "react-icons/md";


export default function Title({handleWidth}){
    return(
        <div className="title-container">
            <div className="details-box">
            <div className="name-symbol">
                <div className='symbol-letter'>B</div>
            </div>
            <div className="name">bharathchandgetla</div>
            <div className="down-arrow">^</div>
            </div>
            <div className="notification-symbol">
            <IoIosNotifications />
            </div>
            <div className="toggle-symbol">
            <MdOutlineRectangle onClick={handleWidth} />
            </div>
        </div>
    )
}