import axios from 'axios'
import { API_URL } from '../components/instances/api-config';
const headerDefault = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

const instance = axios.create({
    baseURL: 'https://follower-matching-api.adamo.tech/api/',
    timeout: 60000,
});

// export const setToken = (_token: string) => {
//     instance.request({
//         headers: {
//             ...headerDefault,
//             token: `${_token}`
//         }
//     })

// }

export const setToken = (_token: string) => {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];

    if (_token) {
        axios.defaults.headers.common['Authorization'] = `${_token}`;
    }
}

export const Log_In = (params: object) => instance.post(API_URL.AUTH.SIGN_IN, params) //signin
export const Sign_Up = (params: object) => instance.post(API_URL.AUTH.SIGN_UP, params) //signup
export const Forgot_Password = (params: object) => instance.post(API_URL.AUTH.FORGOT_PASSWORD, params)
export const Category_App = () => instance.get(API_URL.APP.CATEGORY,)