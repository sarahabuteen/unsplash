import axios from "axios";
import { apiBaseUrl } from "./config";

export const getPhotos = () => {
  return axios.get(`${apiBaseUrl}/photos`).then((response) => {
    return response;
  });
};

export const createPhoto = (data) => {
  return axios.post(`${apiBaseUrl}/photos/create`, data).then((response) => {
    return response;
  });
};
