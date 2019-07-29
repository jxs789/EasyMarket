import request from '../utils/request';

//分类页初始化信息获取
export function getClassify() {
    return request.get('/catalog/index');
}

//根据分类ID获取当前分类信息和子分类
export function getRight(params) {
    return request.get(`/catalog/current?id=${params}`);
}
