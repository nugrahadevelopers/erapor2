import {
    http,
    httpFile
} from './http_service.js';

export function createKelkel(data) {
    return httpFile().post('/kelkel', data);
}

export function showKelkel(id) {
    return http().get(`/kelkel/${id}`);
}

export function loadKelkel() {
    return http().get('/kelkel');
}

export function deleteKelkel(id) {
    return http().delete(`/kelkel/${id}`);
}

export function updateKelkel(id, data) {
    return httpFile().post(`/kelkel/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/kelkel?page=${nextPage}`);
}
