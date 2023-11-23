import { useState, useEffect } from "react";

const useCartData = () => {
  const [cartsData, setCartsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMute = true;

    const fetchCartData = async () => {
      try {
        const response = await fetch(
          "https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/carts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const newData = await response.json();

        if (isMute) {
          setCartsData(newData);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        if (isMute) {
          setLoading(false);
        }
      }
    };

    fetchCartData();

    return () => {
      isMute = false;
    };
  }, []);

  return { cartsData, loading };
};

export default useCartData;
