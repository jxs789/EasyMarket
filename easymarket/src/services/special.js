import request from '../utils/request';

export function getSpecial() {
    return request.get('/topic/list');
}

export function getDetail(id) {
    return request.get('/topic/detail', { params: { id } });
}

export function getComment(valueId, typeId) {
    return request.get('/comment/list', { params: { valueId, typeId } });
}