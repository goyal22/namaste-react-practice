import { REST_LOGO_URL } from "../utils/Constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    locality,
    aggregatedDiscountInfoV3,
  } = resData.info;
  // Get offer text if available
  const offerText =
    aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader
      ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
      : aggregatedDiscountInfoV3?.header || "";

  return (
    <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-0 m-4 w-[340px] min-w-[340px] max-w-[340px] border-0 relative overflow-hidden">
      <div className="relative">
        <img
          src={REST_LOGO_URL + cloudinaryImageId}
          alt={cloudinaryImageId}
          className="card-img w-full h-40 object-cover rounded-2xl"
        />
        {/* Offer Banner */}
        {offerText && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-2 rounded-b-2xl">
            <span className="text-white font-extrabold text-lg drop-shadow-lg tracking-wide">
              {offerText}
            </span>
          </div>
        )}
      </div>
      <div className="card-content flex flex-col items-start px-4 pb-4 pt-2">
        <h2 className="restaurant-name text-lg font-bold text-gray-900 mb-1 w-full truncate">
          {name}
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold mb-1">
          <span className="flex items-center gap-1 text-green-600 font-bold">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            {avgRating}
          </span>
          <span className="text-gray-400 font-normal">•</span>
          <span>{sla?.slaString || "-- mins"}</span>
        </div>
        <p className="dish-name text-sm text-gray-500 mb-1 w-full truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-500 w-full truncate">
          {locality || areaName}
        </p>
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
