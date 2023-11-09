import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  galleryThumbnail: {
    width: screenWidth * 0.15,
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  selectedThumbnail: {
    width: screenWidth * 0.15,
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
    // selected
    padding: 4,
    borderWidth: 1,
    borderColor: "#0B4D8F",
  },
  thumbnailImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 4,
  },
});

export default styles;
