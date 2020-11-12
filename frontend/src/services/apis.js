import axios from "axios";
import { apiBaseUrl } from "./config";

export const getPhotos = () => {
    return axios.get(`${apiBaseUrl}/photos`).then((response) => {
        return response;
    })
};
