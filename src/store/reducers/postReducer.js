import { POST_TYPES } from '@root/actions/postAction';

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
    posts: {},
    features: [],
    blogsByCat: {},
    popular_posts: [
        generate_posts(),
        generate_posts(),
        generate_posts(),
        generate_posts(),
    ],
    archived_posts: [],
    archived_posts_by_year: {},
    category: {},
    result: 0,
    page: 2,
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
                posts: { ...action.payload },
            };
        default:
            return state;
    }
};

export const featuresReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload.data,
            };
        case POST_TYPES.GET_FEATURES:
            return {
                ...state,
                features: action.payload,
            };
        default:
            return state;
    }
};

export const CategoryBlogsReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload.data,
            };
        case POST_TYPES.GET_CATEGORY_BLOGS:
            return {
                blogsByCat: action.payload.blogs,
                category: action.payload.category,
            };
        default:
            return state;
    }
};

export const PopularBlogsReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload.data,
            };
        case POST_TYPES.GET_POPULAR_POSTS:
            return {
                popular_posts: action.payload.data,
            };
        default:
            return state;
    }
};

export const ArchivedBlogsReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload.data,
            };
        case POST_TYPES.GET_ARCHIVED_POSTS:
            return {
                ...state,
                archived_posts: action.payload.data,
            };
        default:
            return state;
    }
};

export const ArchivedBlogsByYearReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload.data,
            };
        case POST_TYPES.GET_ARCHIVED_POSTS_BY_YEAR:
            return {
                archived_posts_by_year: action.payload,
            };
        default:
            return state;
    }
};
