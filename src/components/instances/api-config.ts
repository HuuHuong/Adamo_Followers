// import { useSelector } from "react-redux"
// const id_community = useSelector((store: any) => store.COMMUNITIES.communityForum)
export const API_URL = {
    AUTH: {
        SIGN_UP: 'auth/signup',
        SIGN_IN: 'auth/login',
        VERIFY_CODE: 'auth/verify-account',
        FORGOT_PASSWORD: 'auth/forgot-password',
        RESET_PASSWORD: 'auth/reset-password',
    },

    APP: {
        HOME: 'user/home',
        CATEGORIES: 'user/categories',
        DETAIL_CATEGORY: 'user/category',
        JOIN_COMMUNITY: 'user/communities/join',
        LEAVE_COMMUNITY: 'user/communities/leave',
        BLOCKLIST: 'user/friends/block',
        LOGOUT: 'user/logout',
        CHANGE_PASSWORD: 'user/passwords',
    }

}

export const API_CODE = {
    SUCCESS: {
        CODE: 200,
        MESSAGE: 'OK'
    }
}

export const API_ERROR_CODE = {
    REQUEST_ERROR: {
        CODE: 400,
        MESSAGE: 'api_request_error',
    },
    INTERNET_SERVER_ERROR: {
        CODE: 500,
        MESSAGE: 'Cannot connect to server. Try Again later!',
    },
    AUTHENTICATE: {
        CODE: 401,
        MESSAGE: 'Your session has expired please login again',
    },
    VALIDATE: {
        CODE: 422,
        MESSAGE: 'Something went wrong. Try Again later!', //"api_request_validate"
    },
    VALIDATE_LOGIN: {
        CODE: 409,
        MESSAGE: 'Something went wrong. Try Again later!', // "api_request_validate"
    },
    SERVER_DATA_ERROR: {
        CODE: 404,
        MESSAGE: 'Something went wrong. Try Again later!',
    },
}