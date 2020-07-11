import {
    http,
    httpFile
} from './http_service.js';

export function createKelas(data) {
    return httpFile().post('/kela', data);
}

export function loadKelass() {
    return http().get('/kela');
}

export function deleteKelas(id) {
    return http().delete(`/kela/${id}`);
}

export function updateKelas(id, data) {
    return httpFile().post(`/kela/${id}`, data);
}

export function updateKuota(id) {
    return httpFile().put(`/updatekuota/${id}`);
}

export function hapusKuota(id) {
    return httpFile().put(`/hapuskuota/${id}`);
}

export function loadMore(nextPage) {
    return http().get(`/kela?page=${nextPage}`);
}
