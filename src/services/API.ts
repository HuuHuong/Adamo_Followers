import axios from 'axios'
import { useSelector } from 'react-redux';
import { API_URL } from '../components/instances/api-config';


const instance = axios.create({
    baseURL: 'https://follower-matching-api.adamo.tech/api/',
    timeout: 60000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const setToken = (_token: string) => {
    instance.defaults.headers.common['Authorization'] = '';
    delete instance.defaults.headers.common['Authorization'];

    if (_token) {
        instance.defaults.headers.common['Authorization'] = `${_token}`;
    }

}

export const HOME = () => instance.get(API_URL.APP.HOME)
export const Log_In = (params: object) => instance.post(API_URL.AUTH.SIGN_IN, params) //signin
export const Sign_Up = (params: object) => instance.post(API_URL.AUTH.SIGN_UP, params) //signup
export const Forgot_Password = (params: object) => instance.post(API_URL.AUTH.FORGOT_PASSWORD, params)
export const Category_App = () => instance.get(API_URL.APP.CATEGORIES)
export const Change_Password = (params: object) => instance.post(API_URL.APP.CHANGE_PASSWORD, params)
export const Block_List = () => instance.get(API_URL.APP.BLOCKLIST)
export const Detail_Category = (id: number) => instance.get(API_URL.APP.DETAIL_CATEGORY + '/' + id)
export const Join_Community = (params: object) => instance.post(API_URL.APP.JOIN_COMMUNITY, params)
export const Leave_Community = (params: object) => instance.post(API_URL.APP.LEAVE_COMMUNITY, params)