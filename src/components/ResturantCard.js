import { useContext } from 'react';
import { IMG_CDN_URL } from '../constants';
// import UserContext from '../utils/UserContext';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, sla }) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="w-56 m-2 p-2 shadow-lg bg-[#BBC3A4]">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{sla?.lastMileTravelString}</h4>
      <h4>{sla?.slaString}</h4>
      {/* <h4 className="font-bold">
        {user.name} - {user.email}
      </h4> */}
    </div>
  );
};

export default RestaurantCard;
