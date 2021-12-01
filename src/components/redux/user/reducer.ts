const initialState = {
    user: []
}

export function USER_INFOR(state = initialState, action: any) {
    switch (action.type) {
        case 'USER_LOGIN':
            console.log(action.payLoad);
            return { user: action.payLoad }
        default:
            return state

    }
}
