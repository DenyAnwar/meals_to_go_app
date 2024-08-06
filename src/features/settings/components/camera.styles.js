import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Camera } from "expo-camera/legacy";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const CameraIcon = (props) => (
  <Ionicons name="camera" size={22} color={props.color} />
);

export const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: (props) => <CameraIcon color={props.color} />,
  buttonColor: colors.bg.primary,
  textColor: colors.ui.secondary,
})`
  position: absolute;
  width: 150px;
  bottom: 20px;
`;
