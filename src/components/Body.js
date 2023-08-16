import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./RestaurantCard";

const Body = () => {
const [listOfRestaurant, setlistOfRestaurant] =useState(resList)
    return(
        <div className="body">
            <div className="filter">
            {/* <div className="search">Search</div> */}
            <button 
                onClick={()=> setlistOfRestaurant(listOfRestaurant.filter((res)=>{
                    console.log(res)
                    return(res.info.avgRatingString>4)}))}
                className="filter-btn">Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((e,index) => {//Index as a key is an anti pattern
                        return <ResturantCard
                        	    key={parseInt(e?.info.id)}
                            	resData={e}
                        	/>
                    })
                }
            </div>
        </div>
    );
};
export default Body;