import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null ) {
        return <Shimmer />;
    }

    const data = resInfo?.data?.cards[0]?.card?.card?.info;
    // console.log("🚀 ~ file: RestaurantMenu.js:33 ~ RestaurantMenu ~ data:", data)
    const item = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    // console.log("🚀 ~ file: RestaurantMenu.js:35 ~ RestaurantMenu ~ item:", item)

    return (
        <div className="menu">
            <h1>{data?.name}</h1>
            <h3>{data?.cuisines.join(", ")} - {data?.costForTwoMessage}</h3>
            {/* <h3></h3> */}
            <h2>Menu</h2>
            <ul>
                {item.map((i,index)=> <li key={index}>{i?.card?.info?.name} - For {i?.card?.info?.price/10} ₹ Only</li>)}
            </ul>
            {/* Render your item cards here */}
        </div>
    );
}

export default RestaurantMenu;
