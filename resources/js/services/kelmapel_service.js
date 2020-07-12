import {
    http,
    httpFile
} from './http_service.js';

export function createKelmapel(data) {
    return httpFile().post('/kelmapel', data);
}

export function loadKelmapels() {
    return http().get('/kelmapel');
}

export function deleteKelmapel(id) {
    return http().delete(`/kelmapel/${id}`);
}

export function updateKelmapel(id, data) {
    return httpFile().post(`/kelmapel/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/kelmapel?page=${nextPage}`);
}
