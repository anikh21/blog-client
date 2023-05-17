import { POST_TYPES } from 'store/actions/postAction';
const initState = {
    loading: false,
    items: [],
    limit: 10,
    total: 0,
};

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_POSTS:
            return {
                ...state,
                items: [...action.payload.data],
                page: action.payload.page,
                total: action.payload.total,
            };
        default:
            return state;
    }
};
