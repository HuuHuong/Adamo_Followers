const initialState = {
    communityForum: []
}

export function COMMUNITIES(state = initialState, action: any) {
    switch (action.type) {
        case 'COMMUNITY_FORUM':
            console.log(action.payLoad);
            return { communityForum: action.payLoad }
        // case ''
        default:
            return state

    }
}
