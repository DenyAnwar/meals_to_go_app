import React from "react";

import { ThemeProvider } from "styled-components/native";

import { Dimensions, Keyboard } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// Monkey patch Dimensions.removeEventListener
if (!Dimensions.removeEventListener) {
  Dimensions.removeEventListener = (type, handler) => {
    if (type === "change") {
      const subscription = Dimensions.addEventListener(type, handler);
      subscription?.remove();
    }
  };
}

// Monkey patch Keyboard.removeListener
if (!Keyboard.removeListeners) {
  Keyboard.removeListener = (type, handler) => {
    const subscription = Keyboard.addListener(type, handler);
    subscription.remove();
  };
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
