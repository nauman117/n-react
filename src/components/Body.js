import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
const [listOfRestaurant, setListOfRestaurant] =useState([])
const [filteredListOfRestaurant, setFilteredlistOfRestaurant] =useState([])
const [searchText, setSearchText] =useState("")
useEffect(
     ()=>{
             fetchData();
        },
    []
)
const onlineStatus = useOnlineStatus();
if(!onlineStatus){
    return (<div><h1>You are offline. Please check your Internet connection</h1></div>)
}
const fetchData = async () => {
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json();
    console.log("json",json)
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredlistOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}   
if (listOfRestaurant?.length===0){
// return <h1>loading...</h1>;
return <Shimmer/>;
}
console.log("Body rendered")
    return(listOfRestaurant?.length===0 ? <Shimmer/> :
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}></input>
                <button onClick={()=>{setFilteredlistOfRestaurant(listOfRestaurant.filter((a)=> a.info.name.toLowerCase().includes(searchText.toLowerCase()) ))}}>
                  Search  
                </button>
            </div>
            <button 
                onClick={()=> setFilteredlistOfRestaurant(listOfRestaurant.filter((res)=>{
                    
                    return(res.info.avgRatingString>4)}))}
                className="filter-btn">Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredListOfRestaurant?.map((e,index) => {//Index as a key is an anti pattern
                        return <Link key={parseInt(e?.info.id)} to={"/restaurant/"+e?.info.id}>
                                    <ResturantCard
                                        key={parseInt(e?.info.id)}
                                        resData={e}
                                    />
                                </Link>
                    })
                }
            </div>
        </div>
    );
};
export default Body;