import { Menu_API_URL } from "./Constants";
import { useEffect, useState } from "react";
const useRestaruantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${Menu_API_URL}${resId}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [resId]);

  return { restaurant, error, loading };
}


export default useRestaruantMenu;

