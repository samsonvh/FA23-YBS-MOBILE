import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: "row",
    paddingHorizontal: "6%",
    paddingVertical: 12,
    backgroundColor: "#0B4D8F",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  inforContainer: {
    flex: 1,
    marginLeft: 12,
  },
  username: {
    marginTop: -4,
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  email: {
    fontSize: 16,
    color: "#fff",
  },
  wallet: {
    alignItems: "flex-end"
  },
  points: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default styles;
