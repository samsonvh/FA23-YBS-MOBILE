import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  routeDetailsScreenHeader: {},
  routeName: {
    fontSize: 24,
    fontWeight: "600",
  },
  headerFeaturesContainer: {
    flexDirection: "row",
    columnGap: 8,
  },
  featureButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  buttonFiller: {
    flexGrow: 1,
  },
  showMapButtonContainer: {
    flexGrow: 1,
    flexDirection: "row",
  },
  showMapButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    paddingVertical: 12,
  },
  showMapButtonIcon: {
    fontSize: 16,
  },
  showMapButtonText: {
    fontSize: 16,
  },
  shareButtonContainer: {},
  shareButtonIcon: {
    fontSize: 16,
  },
  shareButtonText: {
    fontSize: 16,
  },
  saveButtonContainer: {},
  saveButtonIcon: {
    fontSize: 16,
  },
  saveButtonText: {
    fontSize: 16,
  },
});

export default styles;
