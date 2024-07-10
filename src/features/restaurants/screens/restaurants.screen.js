import React, { useContext } from "react";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe.area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  marigin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-item: center;
  justify-content: center;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red500} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
