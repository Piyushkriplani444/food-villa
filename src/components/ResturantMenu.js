import { useParams } from 'react-router-dom';
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from '../constants';
import Shimmer from './Shimmer';
import useResMenuData from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className=" shadow-lg bg-[#BBC3A4] flex flex-wrap justify-around">
        <img
          className="p-4 m-4 w-50"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="p-30 m-20">
          <h2 className="font-bold text-xl">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(', ')}</p>
          <div className="border-black">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: 'var(--light-red)' }
                  : restaurant?.avgRating === '--'
                  ? { backgroundColor: 'white', color: 'black' }
                  : { color: 'white' }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="menu-items-container">
          <div className="p-5 mx-5">
            <h3 className="text-xl m-2 font-bold">Recommended</h3>
          </div>
          <div className="flex flex-wrap m-2 p-2 border-black">
            {menuItems.map(
              (item) =>
                item.imageId && (
                  <div
                    className="w-56 m-2 p-2 shadow-lg bg-[#BBC3A4]"
                    key={item?.id}
                  >
                    <div className="menu-item-details">
                      <h3 className="m-2 p-2 text-xl font-bold">
                        {item?.name}
                      </h3>
                      <p className="item-cost">
                        {item?.price > 0
                          ? new Intl.NumberFormat('en-IN', {
                              style: 'currency',
                              currency: 'INR',
                            }).format(item?.price / 100)
                          : ' '}
                      </p>
                      <p className="">{item?.description}</p>
                    </div>
                    <div className="menu-img-wrapper">
                      {item?.imageId && (
                        <img
                          className="menu-item-img"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      <button
                        className="p-1 bg-green-50 rounded-md m-2 "
                        onClick={() => handleAddItem(item)}
                      >
                        ADD +
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
