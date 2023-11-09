import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orDividerContainer: {
    flexDirection: "row",
    marginVertical: 16,
    alignItems: "center",
    columnGap: 6,
    paddingHorizontal: 100
  },
  dividerContainer: {
    flexDirection: "row",
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
  dividerText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
