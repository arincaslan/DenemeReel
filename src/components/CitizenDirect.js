import { Text } from "@chakra-ui/react";
import classes from "./CitizenDirect.module.css";

const CitizenDirect = () => {
    return (
        <div className={classes.backContainer}>
            <Text style={{"color" : "white"}}>
                Our Agents & Lawyers are ready to guide and provide the necessary services for application. 
                You can check out our recomendations for your application. 
                You can contact us via Watsapp just by pressing Watsapp icon.
            </Text>
            <a href="/citizenFlatList" className={classes.citizenDirectButton}>
                Real-Estate For TR-Citizenship
            </a>
        </div>
    )
}

export default CitizenDirect;