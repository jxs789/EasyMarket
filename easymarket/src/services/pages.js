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
//获取商品详情
export function getgoodsDetail(id) {
    return request.get("/goods/detail", { params: { id } })
}
//相关商品
export function getGoodsrelated(id) {
    return request.get("/goods/related", { params: { id } })
}
//获取用户购物车商品数量
export function getCarGoodscount() {
    return request.get("/cart/goodscount")
}
//根据专题ID或者商品ID获取评论获取相关专题
export function getCommentList({ valueId, typeId, size, page }) {
    return request.get('/comment/list', { params: { valueId, typeId, size, page } })
}
//添加到购物车
export function getCartAdd({ goodsId, productId, number }) {
    return request.post('/cart/add', { goodsId, productId, number }
    )
}
//获取用户购物车数据
export function getCartIndex() {
    return request.get('/cart/index',
    )
}
