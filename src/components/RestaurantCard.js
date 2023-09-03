import { CDN_URL } from "../utils/constants";

const rende = (array) => {

    let result = array.slice(0, 3).join(', ');

    if (array.length > 3) {
        result += ', ...';
    }
    return result;
}

const ResturantCard = (props) => {
    const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo } = props?.resData?.info;
    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="res-image rounded-lg " src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-card-body">
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{avgRatingString} ⭐</h4>
                <span>{rende(cuisines)}</span>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export default ResturantCard;