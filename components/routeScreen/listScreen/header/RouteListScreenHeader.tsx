import React from "react";
import { Text, View } from "react-native";
import styles from "@components/routeScreen/listScreen/header/routeListScreenHeader.style";
import SearchForm from "@components/common/searchForm/forms/SearchForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RouteListScreenHeader = (props: { searchQuery }) => {
  return (
    <View style={styles.routeListHeader}>
      <View style={styles.searchFormContainer}>
        <SearchForm />
      </View>
      {props.searchQuery ? (
        <View style={styles.searchTitleContainer}>
          <Text style={styles.searchTitle}>Search for</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.listFeatures}>
        <View style={styles.sortButtonContainer}>
          <Text style={styles.featureText}>Sort</Text>
          <MaterialCommunityIcons style={styles.featureIcon} name="sort" />
        </View>
        <View style={styles.featureSeparator}/>
        <View style={styles.filterButtonContainer}>
          <MaterialCommunityIcons style={styles.featureIcon} name="filter" />
          <Text style={styles.featureText}>Filters</Text>
        </View>
      </View>
    </View>
  );
};

export default RouteListScreenHeader;
