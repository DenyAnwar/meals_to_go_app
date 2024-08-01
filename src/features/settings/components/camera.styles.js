import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Camera } from "expo-camera/legacy";
import { colors } from "../../../infrastructure/theme/colors";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
  buttonColor: colors.ui.secondary,
})`
  position: absolute;
  width: 150px;
  bottom: 20px;
`;
