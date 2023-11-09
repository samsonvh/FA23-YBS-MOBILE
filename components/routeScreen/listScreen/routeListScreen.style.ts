import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  routeListScreen: {},
  routeList: {},
  routeListContent: {
    paddingBottom: "25%"
  },
  listSeparator: {
    marginBottom: 12,
    height: 1,
    marginHorizontal: "10%",
    backgroundColor: "#0003",
  },
});

export default styles;
