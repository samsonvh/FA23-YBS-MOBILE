import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toTopButton: {
    position: "absolute",
    width: 72,
    height: 72,
    bottom: 20,
    right: "5%",
    borderRadius: 12,
    backgroundColor: "#0B4D8F",
    alignItems: "center",
    justifyContent: "center",
  },
  toTopIcon: {
    fontSize: 32,
    color: "#fff",
  },
  toTopText: {
    fontWeight: "600",
    color: "#fff",
  },
});

export default styles;
