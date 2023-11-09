import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  routeListHeader: {},
  searchFormContainer: {
    padding: 20,
    backgroundColor: "#0B4D8F",
  },
  searchTitleContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  listFeatures: {
    flexDirection: "row",
    paddingHorizontal: "8%",
  },
  featureText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0B4D8F",
  },
  featureIcon: {
    fontSize: 21,
    alignSelf: "flex-end",
    color: "#0B4D8F",
  },
  sortButtonContainer: {
    flexDirection: "row",
    columnGap: 3,
    alignItems: "baseline",
    paddingHorizontal: "6%",
    paddingVertical: 20,
  },
  featureSeparator: {
    flexGrow: 1,
  },
  filterButtonContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    paddingHorizontal: "6%",
    paddingVertical: 20,
  },
});

export default styles;
