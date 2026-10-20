import { StyleSheet } from "react-native";
import { Txt } from "../Txt/txt";

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "#0000005c"
    }
});

export function StyledLabel({ children }) {
    return (
        <Txt style={{ fontSize: 15 }}>{children}</Txt>
    );
}

export function StyledValue({ children }) {
    return (
        <Txt style={{ fontSize: 20 }}>{children}</Txt>
    );
}

export function StyledContainer({ children }) {
    return (
        <Txt style={{ alignItems: "center" }}>{children}</Txt>
    );
}

export { styles };