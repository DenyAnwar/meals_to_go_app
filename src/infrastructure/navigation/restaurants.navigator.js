import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restarurant-detail.screen";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
