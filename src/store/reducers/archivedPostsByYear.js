import { POST_TYPES } from 'store/actions/postAction';
const initState = {
    loading: false,
    items: [],
    limit: 10,
    total: 0,
};

export const ArchivedBlogsByYearReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_ARCHIVED_POSTS_BY_YEAR:
            return {
                ...state,
                items: [...action.payload.data],
                total: action.payload.total,
            };
        default:
            return state;
    }
};
