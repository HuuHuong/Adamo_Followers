// import { UserAction, UserModel } from "./action";

// type UserState = {
//     user: UserModel
//     error: string
// }

// const initialState = {
//     user: {},
//     error: undefined
// }
// const UserReducer = (state: UserState = initialState, action: UserAction) => {
//     switch (action.type) {
//         case 'ON_LOGIN':
//             return { ...state, user: action.payLoad }
//         case 'ON_ERROR':
//             return { ...state, error: action.payLoad }
//         default:
//             return state
//     }
// }

// export { UserReducer }

const initialState = {
    user: []
}

export function USER_INFOR(state = initialState, action: any) {
    switch (action.type) {
        case 'USER_LOGIN':
            //console.log(action.payLoad)
            return { user: action.payLoad }
        default:
            return state

    }
}
