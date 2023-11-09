import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  routeCard: {
    width: screenWidth * 0.9,
    overflow: "hidden",
    paddingHorizontal: 8,
    alignSelf: "center",
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#0B4D8F",
  },
  cardImage: {
    width: "100%",
    aspectRatio: 3 / 2,
    borderRadius: 6,
  },
  cardInfor: {
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  cardTitleContainer: {},
  location: {},
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  routeInformation: {
    flexDirection: "row",
    columnGap: 16,
    marginTop: 8,
  },
  departsContainer: {},
  ratingContainer: { flexGrow: 1 },
  ratingInfor: {
    flexDirection: "row",
    alignItems: "baseline",
    columnGap: 4,
  },
  ratingIcon: { color: "#D8A93F" },
  priceContainer: {
    justifyContent: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  text: {
    fontSize: 14,
  },
});
export default styles;
