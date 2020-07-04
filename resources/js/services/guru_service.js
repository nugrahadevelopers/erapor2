import { http, httpFile } from './http_service.js';

export function createGuru(data) {
    return httpFile().post('/guru', data);
}

export function loadGurus() {
    return http().get('/guru');
}