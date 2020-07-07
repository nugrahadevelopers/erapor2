import {
    http,
    httpFile
} from './http_service.js';

export function createMapel(data) {
    return httpFile().post('/mapel', data);
}

export function loadMapels() {
    return http().get('/mapel');
}

export function deleteMapel(id) {
    return http().delete(`/mapel/${id}`);
}

export function updateMapel(id, data) {
    return httpFile().post(`/mapel/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/mapel?page=${nextPage}`);
}
