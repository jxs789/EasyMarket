import request from '../utils/request';

//分类页初始化信息获取
export function getClassify() {
    return request.get('/catalog/index');
}

//根据分类ID获取当前分类信息和子分类
export function getRight(params) {
    return request.get(`/catalog/current?id=${params}`);
}

//获取商品查询的相关信息
export function getSearch() {
    return request.get('/search/index');
}

//商品查询模糊查询关键字
export function getKeyword(keyword) {
    console.log(keyword)
    return request.get(`/search/helper/?keyword=${keyword}`);
}

//删除商品查询的历史记录
export function delHistory() {
    return request.get('/search/clearhistory');
}

//根据分类Id或者制造商Id获取商品
export function getGoodLists(params) {
    console.log(params)
    return request.get('/goods/list', {params})
}
