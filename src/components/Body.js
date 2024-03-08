import ResturantCard from "./ResturantCard";
import { RestrautList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const filteringData = (searchText,resturants)=>{
    const filterData =  resturants.filter((resturant)=> resturant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

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

    return allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
        <div className="search-constainer">
            <input 
             type="text"
             className="search-input" 
             placeholder="Search" 
             value={searchText} 
             onChange={(e)=> {
                setSearchText(e.target.value)
            }}
             />
            <button className="search-button" 
            onClick={()=> {
                const data  = filteringData(searchText,allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>


        </div>
        <div className="resturant-list">
           {filteredRestaurants.length ? filteredRestaurants?.map((resturant)=>{
            return <ResturantCard {...resturant.data} key={resturant.data.id} />
           }) : <h4>No Restraunt Found</h4> }  
        </div>
        </>
        
    )
}

export default Body;