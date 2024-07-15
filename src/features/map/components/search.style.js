import styled from "styled-components/native";
import { Searchbar as PaperSearchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Searchbar = styled(PaperSearchbar)`
  border-radius: 7px;
`;
