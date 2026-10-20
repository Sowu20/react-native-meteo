import { styles } from "./searchbar.style";
import { TextInput } from "react-native";

export function SearchBar({ onSubmit }) {
    return (
        <TextInput 
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
            style={styles.input}
            placeholder="Chercher une ville... EX: Lomé"
        />
    );
}