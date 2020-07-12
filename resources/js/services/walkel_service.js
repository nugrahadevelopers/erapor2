import {
    http,
    httpFile
} from './http_service.js';

export function createWalkel(data) {
    return httpFile().post('/walkel', data);
}

export function loadWalkels() {
    return http().get('/walkel');
}

export function deleteWalkel(id) {
    return http().delete(`/walkel/${id}`);
}

export function updateWalkel(id, data) {
    return httpFile().post(`/walkel/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`/walkel?page=${nextPage}`);
}
