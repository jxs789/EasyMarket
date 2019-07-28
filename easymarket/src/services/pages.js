import request from "../utils/request";
//获取首页数据
export function getPage() {
    return request.get('/');
}
//获取分类ID分类Nav数据
export function getClassifyCommodity(id) {
    return request.get("/goods/category", { params: { id } })
}
//根据分类Id或者制造商Id获取商品
export function getGoodList({ categoryId, page, size }) {
    return request.get("/goods/list", { params: { categoryId, page, size } })
}
//根据制造商ID获取制造商详情
export function getBrandDetail(id) {
    return request.get("/brand/detail", { params: { id } })
}