
import statData from "./data";
import imgURL from "../../assets/IntroNetwork.png"

const Card = ({link, name}) => {
    // console.log(Object.keys(all));
    // console.log(imageUrl);
    // console.log(link);
    // console.log("object");
    return(
        <div className="card-parent__item">
            <img src={imgURL} className="card-parent__item-img"/>
            <h3>{name}</h3>
            <a href={link} target="_blank">View</a>
        </div>
    );
}
export default Card;