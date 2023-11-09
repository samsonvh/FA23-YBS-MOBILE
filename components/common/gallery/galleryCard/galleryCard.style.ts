import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  galleryCard: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0B4D8F",
  },
  cardImage: {
    width: (screenWidth * 0.9) - 18,
    aspectRatio: 3 / 2,
    borderRadius: 8,
  },
});

export default styles;
