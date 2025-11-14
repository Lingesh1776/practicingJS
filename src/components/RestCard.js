import {CDN_URL} from "../utils/constants";
const RestCard = ({RestData}) => {
    const {cloudinaryImageId,name,cuisines,avgRating} = RestData?.info;
    return (
        <div className="res-container" style={{color:"0F0F0F"}}>
                <img
                className="res-logo"
                src={CDN_URL+ cloudinaryImageId}></img>
                <div
                className="res-describe">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{"⭐ "+avgRating}</h4>
                <h4>{RestData.info.sla.deliveryTime + " min"}</h4>
                </div>
        </div>
    );
};


export default RestCard;