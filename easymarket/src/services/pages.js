import request from "../utils/request";
export function getPage() {
    return request.get('/');
}