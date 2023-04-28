import http from "./httpService";
import {apiUrl} from "../config.json";

export function getRootFolder() {
    return http.get(`${apiUrl}/folders/mydrive`).then(res => res.data)
}

export function getFolders() {
    return http.get(`${apiUrl}/folders`).then(res => res.data)
}