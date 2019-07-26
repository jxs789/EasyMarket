import request from "../utils/request";
export function getPage() {
    return request.get('/');
}
export function getClassifyCommodity(id) {
    return request.get("/goods/category", { params: { id } })
}