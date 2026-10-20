import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/date-service";
import { Txt } from "../Txt/txt";
import { styles } from "./clock.style";

export function Clock() {
    const [time, setTime] = useState(nowToHHMM());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Txt style={styles.time}>{time}</Txt>
        </>
    );
}