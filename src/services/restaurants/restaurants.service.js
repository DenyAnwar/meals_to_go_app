import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://09c4-114-122-229-233.ngrok-free.app/mealstogo-beadd/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const MappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED TEMPORARILY",
    };
  });

  return camelize(MappedResult);
};
