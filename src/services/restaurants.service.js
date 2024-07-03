import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = ({ results = [] }) => {
  const MappedResult = results.map((restaurant) => {
    return 1;
  });
  console.log(MappedResult);
  return results;
};

restaurantsRequest()
  .then(restaurantTransform)
  .then((transformedResponse) => {
    // console.log(JSON.stringify(transformedResponse, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
