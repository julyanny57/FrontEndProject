import RemoveCookie from "./removeCookie";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    navigate("/goodbyPage");
    RemoveCookie('userCookie');
    window.localStorage.removeItem("isLoggedIn");
    window.location.reload(false);
    navigate("/goodbyPage");
};
export default Logout;