import RestaurantCard from "./ResturantCard";
import { RestrautList } from "../constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllResturant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {}
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-[#C6DCBA] m-2">
        <input
          type="text"
          className="focus:bg-green-100 p-1 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-[#B3A398] hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
