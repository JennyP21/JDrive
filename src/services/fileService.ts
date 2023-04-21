import http from "./httpService";
import {apiUrl} from "../config.json";

export function getFiles() {
    return http.get(`${apiUrl}/files`).then(res => res.data)
}

export function uploadFile(file: File) {
    return http.post(`${apiUrl}/files/upload`, file, {
        headers: {
            'content-type': file.type,
        },
    }).then(res => res.data)
}