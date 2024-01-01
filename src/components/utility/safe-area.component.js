import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

/*
  memerikas apakah StatusBar.currentHeight terdefinisi
  jika ya, makan akan menambahkan marigin-top
*/
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
