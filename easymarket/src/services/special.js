import request from '../utils/request';

export function getSpecial() {
    return request.get('/topic/list');
}

export function getDetail(id) {
    return request.get('/topic/detail', { params: { id } });
}

export function getComment(valueId, typeId, page, size) {
    return request.get('/comment/list', { params: { valueId, typeId, page, size } });
}

export function getRelated(id) {
    return request.get('/topic/related',{ params: { id } });
}
