import styled from "styled-components/native";
import { Searchbar as PaperSearchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Searchbar = styled(PaperSearchbar)`
  border-radius: 5px;
`;
