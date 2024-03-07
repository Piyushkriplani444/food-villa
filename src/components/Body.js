import ResturantCard from "./ResturantCard";
import { RestrautList } from "../constants";
import { useState } from "react";

const filterData = (searchText,resturants)=>{
    const filterData =  resturants.filter((resturant)=> resturant.data.name.includes(searchText));
    return filterData;
}

const Body = ()=> {

    const [searchText,setSearchText]= useState("");
    const [resturants, setResturant] = useState(RestrautList);
    return (
        <>
        <div className="search-constainer">
            <input 
             type="text"
             className="search-input" 
             placeholder="Search" 
             value={searchText} 
             onChange={(e)=> setSearchText(e.target.value)}
             />
            <button className="search-button" 
            onClick={()=> {
                const data  = filterData(searchText,resturants);
                setResturant(data);
            }}>Search</button>


        </div>
        <div className="resturant-list">
           { resturants.map((resturant)=>{
            return <ResturantCard {...resturant.data} key={resturant.data.id} />
           })}  
        </div>
        </>
        
    )
}

export default Body;