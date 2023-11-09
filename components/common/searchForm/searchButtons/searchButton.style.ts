import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: "#D8A93F",
  },
  searchButtonIcon: {
    color: "#fff",
    fontSize: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
