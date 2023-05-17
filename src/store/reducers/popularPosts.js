import { POST_TYPES } from 'store/actions/postAction';

const generate_posts = () => {
    return {
        _id: Math.random(0, 10),
        thumbnail: '',
        title: '',
        category: {},
        author: {},
    };
};

const initState = {
    loading: false,
    popular_posts: [
        generate_posts(),
        generate_posts(),
        generate_posts(),
        generate_posts(),
    ],
};

export const PopularBlogsReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_POPULAR_POSTS:
            return {
                popular_posts: action.payload.data,
            };
        default:
            return state;
    }
};
