import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
// example
const apiUrl = "http://127.0.0.1:8000/api";
const httpClient = fetchUtils.fetchJson;
export const dataProvider = {
    getList: async (resource, params) => {
        
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 0,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: async (resource, params) => {
        
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        
        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt((headers.get('content-range') || "0").split('/').pop() || 0, 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/create`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: async (resource, params) => {
        
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};