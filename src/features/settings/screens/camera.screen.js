import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera/legacy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import {
  ProfileCamera,
  CameraContainer,
  CameraButton,
} from "../components/camera.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"4:3"}
        type={CameraType.front}
      />
      <CameraButton onPress={snap}>
        <Text variant="secondLabel">snap</Text>
      </CameraButton>
    </CameraContainer>
  );
};
