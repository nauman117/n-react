import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    console.log("🚀 ~ file: RestaurantMenu.js:10 ~ RestaurantMenu ~ resId:", resId)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_URL + resId);
            
            
        const json = await response.json();
            setResInfo(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    if (resInfo === null ) {
        return <Shimmer />;
    }

    const data = resInfo?.data?.cards[0]?.card?.card?.info;
    console.log("🚀 ~ file: RestaurantMenu.js:33 ~ RestaurantMenu ~ data:", data)
    const item = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    console.log("🚀 ~ file: RestaurantMenu.js:35 ~ RestaurantMenu ~ item:", item)

    return (
        <div className="menu">
            <h1>{data?.name}</h1>
            <h3>{data?.cuisines.join(", ")} - {data?.costForTwoMessage}</h3>
            {/* <h3></h3> */}
            <h2>Menu</h2>
            <ul>
                {item.map((i)=> <li>{i?.card?.info?.name} - For {i?.card?.info?.price/10} ₹ Only</li>)}
            </ul>
            {/* Render your item cards here */}
        </div>
    );
}

export default RestaurantMenu;
