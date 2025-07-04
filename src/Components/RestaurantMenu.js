import { useParams } from "react-router-dom";
import useRestaruantMenu from "../utils/useRestaruantMenu";
const RestaurantMenu = () =>{
    const {resId} = useParams();
    const data = useRestaruantMenu(resId);
     const data12 = data.restaurant?.cards[0]?.card?.card?.info;

  const itemCards  =
    data.restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
    console.log(data12);
    return(<div><h1>RestName {data.restaurant | JSON}</h1></div>);
}


export default RestaurantMenu;