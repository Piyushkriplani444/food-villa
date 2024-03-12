import RestaurantCard from "./ResturantCard";
import { RestrautList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";

const Body = ()=> {

    const [searchText,setSearchText]= useState("");
    const [allRestaurants, setALLResturant] = useState(RestrautList);
     const [filteredRestaurants, setFilteredRestaurants] = useState(RestrautList);

     useEffect(()=>{
        getRestaurants();
     },[]);

     async function getRestaurants(){
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json  = await data.json();
            console.log(json?.data)
            // setALLResturant(json?.data?.cards);
            // setFilteredData(json?.data?.cards)
           
        } catch (error) {
            
        }
     }

    //  if (!allRestaurants) return null;
    
    //  if (filteredRestaurants?.length === 0)
    // return <h1>No Restraunt match your Filter!!</h1>;

//     const isOnline = useOnline();
//   if (!isOnline) {
//     return <h1>🔴 Offline, please check your internet connection!!</h1>;
//   }
    return allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
        <div className="search-container">
            <input 
             type="text"
             className="search-input" 
             placeholder="Search" 
             value={searchText} 
             onChange={(e) => {
                setSearchText(e.target.value)
            }}
             />
            <button 
            className="search-button" 
            onClick={() => {
                const data  = filterData(searchText,allRestaurants);
                setFilteredRestaurants(data);
            }}>
                Search
            </button>
        </div>
        <div className="restaurant-list">
           {filteredRestaurants?.map((restaurant)=>{
            return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link> );   
            })}  
        </div>
        </>
        
    )
}

export default Body;