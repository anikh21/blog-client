import { POST_TYPES } from 'store/actions/postAction';
const initState = {
    loading: false,
    items: [],
};

export const archivedPosts = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_ARCHIVED_POSTS:
            return {
                ...state,
                items: action.payload.data,
            };
        default:
            return state;
    }
};
