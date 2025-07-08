import { useParams } from "react-router-dom";
import useRestaruantMenu from "../utils/useRestaruantMenu";
import { useEffect } from "react";
const RestaurantMenu = () =>{
    const {resId} = useParams();
    const data = useRestaruantMenu(resId);
    console.log("RestaurantMenu data", data);
   if(data.loading){
    return <h1 className="text-2xl text-center text-red-600 font-bold mt-10">Loading...</h1>
   }
   return (
    <><div className="restaurant-menu-container p-4">
     </div><div className="restaurant-menu-header text-2xl font-bold mb-4">
         <h1>{data?.restaurant?.cards[0].card[2].card[0].info.city}</h1>
       </div></>)
}


export default RestaurantMenu;