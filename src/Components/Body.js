import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

export const Body = () => {
  const divStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
    marginRight: "10px",
    marginBottom: "10px",
  };

  const [listofRes, setListOfRes] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const restDta = await data.json();
    const restaurants = restDta?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRes(restaurants);
    setAllRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topRestRest = () => {
    const filteredList = allRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setListOfRes(filteredList);
  };

  const resetFilter = () => {
    setListOfRes(allRestaurants);
    setSearchText("");
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRes(filtered);
  };

  if (listofRes.length === 0) {
    return <h1>Loading...</h1>;
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
      <button style={divStyle} onClick={topRestRest}>
        Top Rated Restaurants
      </button>
      <button style={divStyle} onClick={resetFilter}>
        Reset
      </button>

      <div className="rest-card" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {listofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
