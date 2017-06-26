import axios from 'axios';

export const FETCH_TOONS = 'fetch_toons';
export const CREATE_TOON = 'create_toon';
export const FETCH_TOON = 'fetch_toon';
export const DELETE_TOON = 'delete_toon';

const ROOT_URL = 'http://localhost:3000';
const API_KEY = '';

export function fetchToons() {
    const request = axios.get(`${ROOT_URL}/toons${API_KEY}`);

    return {
        type: FETCH_TOONS,
        payload: request
    };
}

export function createToon(values, callback){
    const request = axios.post(`${ROOT_URL}/toons/${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_TOON,
        payload: request
    };
}

export function fetchToon(id) {
    const request = axios.get(`${ROOT_URL}/toons/${id}${API_KEY}`);

    return {
        type: FETCH_TOON,
        payload: request
    }
}

export function deleteToon(id, callback){
    const request = axios.delete(`${ROOT_URL}/toons/${id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_TOON,
        payload: id
    }
}