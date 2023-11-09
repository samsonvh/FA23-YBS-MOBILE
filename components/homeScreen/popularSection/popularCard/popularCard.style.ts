import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  popularCard: {
    width: (screenWidth * 0.9) / 2,
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
  },
  cardOverlay: {
    flex: 1,
    backgroundColor: "#0004",
    flexDirection: "column-reverse",
  },
  cardTitle: {
    paddingLeft: 16,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
});

export default styles;
