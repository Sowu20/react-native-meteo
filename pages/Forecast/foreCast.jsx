import { styles } from "./foreCast.style.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { getWeatherInterpretation } from "../../services/meteo-services.js";
import { dateToDDMM, DAYS } from "../../services/date-service.js";
import { Container } from "../../components/Container/container.jsx";
import { Txt } from "../../components/Txt/txt.jsx";
import { ForecastListItem } from "../../components/ForecastListItem/forecastListItem.jsx";

export function Forecast({}) {
  const { params } = useRoute();
  const nav = useNavigation();

  const backButton = (
    <TouchableOpacity style={styles.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <>
      <View style={styles.header}>
        {backButton}
        <View style={styles.header_texts}>
          <Txt>{params.city}</Txt>
          <Txt style={styles.subtitle}>Prévision sur 7 jours</Txt>
        </View>
      </View>
    </>
  );

  const forecastList = (
    <View style={styles.forecastList}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index];

        return (
          <ForecastListItem
            image={image}
            day={day}
            key={time}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}