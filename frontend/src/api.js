import axios from 'axios';
import { toCamelCase, toSnakeCase } from './utils';


const getAuthorizationHeader = () => ({ Authorization: `Bearer ${localStorage.getItem('access')}` });

export const get = (url, params) => {
    let headers;
    if (localStorage.getItem('access')) {
        headers = getAuthorizationHeader();
    }
    return axios.get(`${origin}${url}`, { params: toSnakeCase(params), headers }).then(res => toCamelCase(res.data))
};

export const post = (url, data, withAuth=true) => {
    let headers;
    if (withAuth && localStorage.getItem('access')) {
        headers = {
            headers: {
                ...getAuthorizationHeader(),
            }
        };
    }
    return axios.post(`${origin}${url}`, toSnakeCase(data), headers).then(res => toCamelCase(res.data))
};

export const patch = (url, data) => {
    let headers;
    if (localStorage.getItem('access')) {
        headers = {
            headers: {
                ...getAuthorizationHeader(),
            }
        };
    }
    return axios.patch(`${origin}${url}`, toSnakeCase(data), headers).then(res => toCamelCase(res.data))
};


export const remove = (url, data) => {
    let headers;
    if (localStorage.getItem('access')) {
        headers = {
            ...getAuthorizationHeader(),
        }
    }
    return axios.delete(`${origin}${url}`, {
        headers,
        data: toSnakeCase(data)
    }).then(res => toCamelCase(res.data))
};


export const signUp = (payload) => {
    return post('/api/users/', payload, false);
};

export const refreshToken = (payload) => {
    return post('/api/auth/token/refresh/', payload, false);
};

export const getTokens = (payload) => {
    return post('/api/auth/token/obtain/', payload);
};
