import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://2a5e-114-122-230-43.ngrok-free.app/mealstogo-beadd/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
