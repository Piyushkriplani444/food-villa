import RestaurantCard from './ResturantCard';
import { RestrautList } from '../constants';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
// import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setALLResturant] = useState(RestrautList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(RestrautList);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      console.log(json?.data);
      // setALLResturant(json?.data?.cards);
      // setFilteredData(json?.data?.cards)
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
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
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
              to={'/restaurant/' + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
