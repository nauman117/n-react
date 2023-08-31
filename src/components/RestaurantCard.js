import { CDN_URL } from "../utils/constants";

const rende = (array) => {

    let result = array.slice(0, 3).join(', ');

    if (array.length > 3) {
        result += ', ...';
    }
    return result;
}
const styleCard = {
    //inlined styles 
    backgroundColor: "#f0f0f0",
}

const ResturantCard = (props) => {
    const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo } = props?.resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-card-body">
                <h3>{name}</h3>
                <h4>{avgRatingString} ⭐</h4>
                <span>{rende(cuisines)}</span>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export default ResturantCard;