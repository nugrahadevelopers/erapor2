import {
    http,
    httpFile
} from './http_service.js';

export function createEkskul(data) {
    return httpFile().post('/ekskul', data);
}

export function loadEkskuls() {
    return http().get('/ekskul');
}

export function deleteEkskul(id) {
    return http().delete(`/ekskul/${id}`);
}

export function updateEkskul(id, data) {
    return httpFile().post(`/ekskul/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/ekskul?page=${nextPage}`);
}
