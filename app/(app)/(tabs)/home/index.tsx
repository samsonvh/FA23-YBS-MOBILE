import styles from "@components/homeScreen/homeScreen.style";
import ProfileSection from "@components/homeScreen/profileSection/ProfileSection";
import SearchForm from "@components/common/searchForm/forms/SearchForm";
import React from "react";
import { ScrollView, View } from "react-native";
import PopularSection from "@components/homeScreen/popularSection/PopularSection";
import DealSection from "@components/homeScreen/dealSection/DealSection";

const HomePage = () => {
  return (
    <ScrollView style={styles.homeScreen}>
      <ProfileSection />
      <View style={styles.searchFormContainer}>
        <SearchForm />
      </View>
      <PopularSection />
      <DealSection />
    </ScrollView>
  );
};

export default HomePage;
