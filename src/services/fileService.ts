import http from "./httpService";
import {apiUrl} from "../config.json";

export function getFiles() {
    return http.get(`${apiUrl}/files`)
}