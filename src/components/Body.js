import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ResturantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredListOfRestaurant, setFilteredlistOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const RestaurantCardPromoted = withPromotedLabel(ResturantCard);
    useEffect(
        () => {
            fetchData();
        },
        []
    )
    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (<div><h1>You are offline. Please check your Internet connection</h1></div>)
    }
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log("json", json)
        setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredlistOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("filteredlistOfRestaurant: ", filteredListOfRestaurant);
    }
    if (listOfRestaurant?.length === 0) {
        // return <h1>loading...</h1>;
        return <Shimmer />;
    }
    console.log("Body rendered")
    return (listOfRestaurant?.length === 0 ? <Shimmer /> :
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" onChange={(e) => { setSearchText(e.target.value) }} value={searchText}></input>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => { setFilteredlistOfRestaurant(listOfRestaurant.filter((a) => a.info.name.toLowerCase().includes(searchText.toLowerCase()))) }}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button
                    onClick={() => setFilteredlistOfRestaurant(listOfRestaurant.filter((res) => {

                        return (res.info.avgRatingString > 4)
                    }))}
                    className="filter-btn px-4 py-1 bg-gray-50 rounded-lg">Top Rated Restaurant</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center">
                {
                    filteredListOfRestaurant?.map((e, index) => {//Index as a key is an anti pattern
                        return <Link key={parseInt(e?.info.id)} to={"/restaurant/" + e?.info.id}>
                            {/**if restaurant is promoted then add promoted label */}
                            {
                                e?.info?.promoted ? 
                                    <RestaurantCardPromoted 
                                        key={parseInt(e?.info.id)}
                                        resData={e}
                                    /> 
                                    :
                                    <ResturantCard
                                        key={parseInt(e?.info.id)}
                                        resData={e}
                                    />
                            }
                            
                        </Link>
                    })
                }
            </div>
        </div>
    );
};
export default Body;