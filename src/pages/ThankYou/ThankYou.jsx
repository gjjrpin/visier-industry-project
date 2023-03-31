import "./ThankYou.scss";
import ex from "../../assets/x.png";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {

    let navigate = useNavigate(); 

    return (
        <div className="thankyou">
            <div className="thankyou__background"></div>
            <div className="thankyou__modal">
                <img src={ ex } alt="close window icon" className="thankyou__x" />
                    <h1 className="thankyou__title">Thank you for signing up.</h1>
                    <div className="thankyou__button-box">
                        <button onClick={()=> navigate('/')} className="thankyou__btn thankyou__btn-1">Create a report</button>
                        <button onClick={()=> navigate('/')} className="thankyou__btn thankyou__btn-2">Explore</button>
                    </div>
            </div>
        </div>
    )
}