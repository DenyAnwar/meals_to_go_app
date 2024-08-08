import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://09c4-114-122-229-233.ngrok-free.app/mealstogo-beadd/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
