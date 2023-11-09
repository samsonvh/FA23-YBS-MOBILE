import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    signInButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#4285f4",
        paddingVertical: 12
    },
    googleLogo: {
        color: "#4285f4"
    },
    signInButtonText: {
        paddingLeft: 12,
        fontSize: 16,
        fontWeight: "600",
        color: "#4285f4"
    }
});

export default styles;
