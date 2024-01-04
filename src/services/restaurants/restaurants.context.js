import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 3000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
