import { styles } from "./container.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";

export function Container({ children }) {
    return (
        <ImageBackground
            source={backgroundImg}
            style={styles.img_background}
            imageStyle={styles.img}  
        >
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </ImageBackground>
    );
}