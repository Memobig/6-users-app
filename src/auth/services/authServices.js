import axios from "axios";

export const loginUser = async ({password, username}) => {
    try {
        return await axios.post("http://localhost:8080/login",{password, username});
    } catch (error) {
        throw error;
    }
}