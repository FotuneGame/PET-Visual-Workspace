import axios from "axios";
import { URL_Auth_API } from ".";

const Refresh = async (refresh_token: string) =>{
    const res = await axios.post(URL_Auth_API+"/refresh",
        {},
        {
            withCredentials: true,
        },
    );

    return res;
}

export default Refresh;