import http from "./httpService";
import {apiUrl} from "../config.json";

export function getFiles() {
    return http.get(`${apiUrl}/files`).then(res => res.data)
}

export function uploadFile(formData: FormData) {
    return http.post(`${apiUrl}/files/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => res.data);
}