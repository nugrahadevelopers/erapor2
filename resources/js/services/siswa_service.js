import { http, httpFile } from './http_service.js';

export function createSiswa(data) {
    return httpFile().post('/siswa', data);
}

export function loadSiswas() {
    return http().get('/siswa');
}

export function deleteSiswa(id) {
    return http().delete(`/siswa/${id}`);
}

export function updateSiswa(id, data) {
    return httpFile().post(`/siswa/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/siswa?page=${nextPage}`);
}