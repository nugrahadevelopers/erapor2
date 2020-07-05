import { http, httpFile } from './http_service.js';

export function createGuru(data) {
    return httpFile().post('/guru', data);
}

export function loadGurus() {
    return http().get('/guru');
}

export function deleteGuru(id) {
    return http().delete(`/guru/${id}`);
}

export function updateGuru(id, data) {
    return httpFile().post(`/guru/${id}`, data);
}