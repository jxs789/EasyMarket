import request from '../utils/request';

//收藏栏
export function getCollect(typeId) {
    return request.post(`/collect/list/?typeId=${typeId}`);
}

//获取用户地址数据
export function getAddress() {
    return request.get('/address/list');
}

//新增地址
export function addSite(params) {
    return request.post('/address/save',params);
}


//删除地址
export function delSite(id) {
    return request.post('/address/delete',{id});
}