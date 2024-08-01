import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera/legacy";

import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import {
  ProfileCamera,
  CameraContainer,
  CameraButton,
} from "../components/camera.styles";

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
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
        ratio={"16:9"}
        type={CameraType.front}
      />
      <CameraButton onPress={snap}>
        <Text variant="label">Snap</Text>
      </CameraButton>
    </CameraContainer>
  );
};
