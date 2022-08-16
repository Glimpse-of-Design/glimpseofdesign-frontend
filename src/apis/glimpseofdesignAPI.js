import axios from "axios";

export default axios.create({
    baseURL: "https://glimpseofdesign-backend-new.herokuapp.com/api/v1",
});