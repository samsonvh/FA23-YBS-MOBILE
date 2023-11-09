import React from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import styles from "./searchForm.style";
import DividerLine from "@components/common/divider/DividerLine";
import SearchButton from "../searchButtons/SearchButton";

const SearchForm = () => {
  return (
    <KeyboardAvoidingView style={styles.searchForm} behavior="padding">
      <View style={styles.inputSection}>
        <Text style={styles.label}>Where to</Text>
        <TextInput style={styles.inputText} placeholder="All Desination" />
        <View style={styles.dividerContainer}>
          <DividerLine />
        </View>
        <Text style={styles.label}>Yacht Type</Text>
        <TextInput style={styles.inputText} placeholder="All Desination" />
        <View style={styles.dividerContainer}>
          <DividerLine />
        </View>
        <Text style={styles.label}>Yacht Type</Text>
        <TextInput style={styles.inputText} placeholder="All Desination" />
      </View>
      <View style={styles.searchButtonContainer}>
        <SearchButton/>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchForm;
