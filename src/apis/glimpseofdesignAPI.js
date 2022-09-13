import axios from "axios";

export default axios.create({
    baseURL: "https://glimpseofdesign-backend.herokuapp.com/api/v1",
});