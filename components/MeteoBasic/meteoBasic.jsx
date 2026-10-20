import { Image, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Txt } from "../Txt/txt";
import { Clock } from "../Clock/clock";
import { styles } from "./meteoBasic.style";

export function MeteoBasic({ onPress, temperature, city, interpretation }) {
    return (
        <>
            <View style={styles.clock}>
                <Clock />
            </View>

            <Txt>{city}</Txt>

            <Txt style={styles.weather_label}>{interpretation.label}</Txt>

            <View style={styles.temperature_box}>
                <TouchableOpacity onPress={onPress}>
                    <Txt style={styles.temperature}>{temperature}°</Txt>
                </TouchableOpacity>
                <Image style={styles.image} source={interpretation.image} />
            </View>
        </>
    );
};