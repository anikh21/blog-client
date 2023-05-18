import { POST_TYPES } from 'store/actions/postAction';
const initState = {
    loading: false,
    items: [],
    limit: 10,
    total: 0,
    category: {},
};

export const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_CATEGORY_BLOGS:
            return {
                ...state,
                items: [...action.payload.blogs.docs],
                page: action.payload.blogs.page,
                total: action.payload.blogs.totalDocs,
                category: action.payload.category,
            };
        default:
            return state;
    }
};
