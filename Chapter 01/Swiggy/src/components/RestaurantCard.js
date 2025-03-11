import { MEDIA_ASSETS_URL } from "../utils/constant";

const resCardBackground = {
  backgroundColor: "#f0f0f0",
};

export default RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  return (
    <div className="res-card" style={resCardBackground}>
      <img src={MEDIA_ASSETS_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} min</h4>
    </div>
  );
};
