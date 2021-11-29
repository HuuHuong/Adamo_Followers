import axios from 'axios'
import { API_URL } from '../components/instances/api-config';

const instance = axios.create({
    baseURL: 'https://follower-matching-api.adamo.tech/api/',
    timeout: 60000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});

export const Log_In = (params: object) => instance.post(API_URL.AUTH.SIGN_IN, params) //signin
export const Sign_Up = (params: object) => instance.post(API_URL.AUTH.SIGN_UP, params) //signup
export const Forgot_Password = (params: object) => instance.post(API_URL.AUTH.FORGOT_PASSWORD, params)