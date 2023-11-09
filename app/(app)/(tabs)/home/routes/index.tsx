import RouteCard from "@components/common/routeCard/RouteCard";
import SearchForm from "@components/common/searchForm/forms/SearchForm";
import ToTopButton from "@components/common/toTopButton/ToTopButton";
import RouteListScreenHeader from "@components/routeScreen/listScreen/header/RouteListScreenHeader";
import styles from "@components/routeScreen/listScreen/routeListScreen.style";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { routeListItem } from "requests/interfaces";
import { getRouteDeals } from "requests/routes";

const RouteListPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [routeList, setRouteList] = useState<routeListItem[]>();
  const params = useLocalSearchParams();
  const routeListRef = useRef();

  const handleLoadMore = async () => {
    const newRouteList = await getRouteDeals();
    setRouteList((oldList) => [...oldList, ...newRouteList]);
  };

  useEffect(() => {
    const loadRouteList = async () => {
      setRouteList(await getRouteDeals());
    };

    if (params.searchQuery) {
    } else {
      loadRouteList();
    }
  }, []);

  if (!routeList) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={routeListRef}
        style={styles.routeList}
        contentContainerStyle={styles.routeListContent}
        data={routeList}
        onScroll={(event) => {
          const scrollOffset = event.nativeEvent.contentOffset.y;
          if (scrollOffset > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }}
        onEndReached={() => {
          // handleLoadMore();
        }}
        ListHeaderComponent={() => (
          <RouteListScreenHeader searchQuery={params.searchQuery} />
        )}
        renderItem={(item) => <RouteCard item={item.item} />}
        ItemSeparatorComponent={() => <View style={styles.listSeparator}/>}
      />
      {isScrolled ? <ToTopButton flatListRef={routeListRef}/> : <></>}
    </View>
  );
};

export default RouteListPage;
