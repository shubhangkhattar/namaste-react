import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOFRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName, loggedInUser } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Offline</h1>;
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.7095346%26lng%3D77.1887698%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOFRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 p-4  flex items-center">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4"
          onClick={() => {
            const filteredListRestaurant = listOFRestaurants.filter(
              (restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setfilteredRestaurants(filteredListRestaurant);
          }}
        >
          Search
        </button>
        <div className="m-4 p-4  flex items-center">
          <label>UserName :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <button
          className="px-4 py-2 bg-gray-50 rounded-lg"
          onClick={() => {
            const filteredRestaurants = listOFRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resName={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resName={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
