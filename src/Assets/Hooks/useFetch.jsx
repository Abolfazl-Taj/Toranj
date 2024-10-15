import axios from "axios";
import { useEffect, useState } from "react";

const useFetch =  (url, method , body = null) => {
  const [foodData, setFoodData] = useState([]);
  const [isPending, setIPending] = useState(false);
  useEffect(() => {
    console.log(url);
    if (method === "get")
      axios
        .get(url)
        .then((res) => {
          setFoodData(res.data);
          setIPending(true);
          console.log(foodData);
        })
        .catch((err) => console.log(err));
  }, [url]);
  return [foodData , isPending];
};
export default useFetch;
