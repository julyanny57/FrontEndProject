import {useNavigate} from "react-router-dom";
import MixGames from "../pages/MixGames";

const GoToYourGames = () => {
    console.log("privet");
    let navigate = useNavigate();
    navigate(MixGames);
};
export default GoToYourGames;