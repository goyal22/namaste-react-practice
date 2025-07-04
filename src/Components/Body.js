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

  const divStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
    marginRight: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  };

  // Offline Check
  if (!onlineStatus) {
    return <h1>You are Offline. Please check your connection.</h1>;
  }

  // Loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // No results state
  if (!loading && listOfRes.length === 0) {
    return <h2>No restaurants found. Please try a different search.</h2>;
  }

  return (
    <div className="body" style={{ padding: "20px" }}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search restaurants..."
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button style={divStyle} onClick={handleSearch}>
        Search
      </button>
      <button style={divStyle} onClick={filterTopRated}>
        Top Rated Restaurants
      </button>
      <button style={divStyle} onClick={resetFilter}>
        Reset
      </button>

      <div
        className="rest-card"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {listOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
