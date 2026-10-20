import { Image, View } from "react-native";
import { styles } from "./forecastListItem";
import { Txt } from "../Txt/txt";

export function ForecastListItem({ image, day, date, temperature }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Txt style={styles.day}>{day}</Txt>
            <Txt style={styles.date}>{date}</Txt>
            <Txt>{temperature}°</Txt>
        </View>
    );
}