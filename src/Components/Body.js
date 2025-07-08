import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllRestaurants(restaurants);
        setListOfRes(restaurants);
      } catch (err) {
        console.error("Error fetching restaurant data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setListOfRes(filtered);
  };

  const filterTopRated = () => {
    const filtered = allRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setListOfRes(filtered);
  };

  const resetFilter = () => {
    setSearchText("");
    setListOfRes(allRestaurants);
  };

  // Offline Check
  if (!onlineStatus) {
    return <h1 className="text-2xl text-center text-red-600 font-bold mt-10">You are Offline. Please check your connection.</h1>;
  }

  // Loading state
  if (loading) {
    return <h1 className="text-2xl text-center text-blue-600 font-bold mt-10">Loading...</h1>;
  }

  // No results state
  if (!loading && listOfRes.length === 0) {
    return <h2 className="text-xl text-center text-gray-600 font-semibold mt-10">No restaurants found. Please try a different search.</h2>;
  }

  return (
    <div className="body px-4 py-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants..."
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 w-full sm:w-64"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors" onClick={handleSearch}>
          Search
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors" onClick={resetFilter}>
          Reset
        </button>
      </div>
      <div
        className="rest-card flex flex-wrap gap-2 justify-center"
      >
        {listOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="no-underline text-black"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
