import request from '../utils/request';
//获取专题数据
export function getSpecial() {
    return request.get('/topic/list');
}
export function getDetail(id) {
    return request.get('/topic/detail', { params: { id } });
}
//根据专题ID或者商品ID获取评论获取相关专题
export function getComment(valueId, typeId, page, size) {
    return request.get('/comment/list', { params: { valueId, typeId, page, size } });
}

export function getRelated(id) {
    return request.get('/topic/related', { params: { id } });
}
//添加留言
export function addMessage({ obj }) {
    return request.post('comment/post', obj);
}
