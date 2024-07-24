import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Dimensions, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IlAhJLeYi32kYc2Q75obAtnkjmN5zSg",
  authDomain: "mealstogo-beadd.firebaseapp.com",
  projectId: "mealstogo-beadd",
  storageBucket: "mealstogo-beadd.appspot.com",
  messagingSenderId: "878337274347",
  appId: "1:878337274347:web:baaa124fb409f2afa5e9ae",
};

// Initialize Firebase only if no apps are initialized
if (!getApps().length) {
  const app = initializeApp(firebaseConfig);

  // Initialize Auth
  initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
} else {
  // Get the already initialized app
  const app = getApps()[0];

  // Initialize Auth if it hasn't been already
  if (!getAuth(app)) {
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
