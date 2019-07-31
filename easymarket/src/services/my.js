import request from '../utils/request';
//收藏栏



export function getCollect({ typeId, size }) {
    return request.get(`/collect/list`, { params: { typeId, size } });
}
//获取用户地址数据
export function getAddress() {
    return request.get('/address/list');
}

