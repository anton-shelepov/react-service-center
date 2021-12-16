import axios from 'axios';

export const BASE_URL = 'https://petstore.swagger.io/v2/swagger.json'
export const SEARCH_URL = ''
export const SEARCH_PARAM = ''

function apiClient() { 
    const axiosInstance = axios.create({
        withCredentials = true, //automatically send cookies in requests
        responseType = 'json',
        baseURL: BASE_URL,
        headers: {
            //Authorization: 'token'
        }
    })

    return axiosInstance
} 

export default apiClient