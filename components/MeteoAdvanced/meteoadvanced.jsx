import { View } from "react-native";
import { styles, StyledContainer, StyledLabel, StyledValue } from "./meteoadvanced.style";
import { Txt } from "../Txt/txt";

export function MeteoAdvanced({ dusk, dawn, wind }) {
    return (
        <View style={styles.container}>
            <StyledContainer>
                <StyledValue>{dusk}</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>{dawn}</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>{wind} km/h</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledContainer>
        </View>
    )
}