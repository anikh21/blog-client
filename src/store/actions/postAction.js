import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const POST_TYPES = {
    LOADING_POST: 'LOADING_POST',
    GET_POSTS: 'GET_POSTS',
    GET_POST: 'GET_POST',
    GET_FEATURES: 'GET_FEATURES',
    GET_CATEGORY_BLOGS: 'GET_CATEGORY_BLOGS',
    GET_POPULAR_POSTS: 'GET_POPULAR_POSTS',
    GET_ARCHIVED_POSTS: 'GET_ARCHIVED_POSTS',
    GET_ARCHIVED_POSTS_BY_YEAR: 'GET_ARCHIVED_POSTS_BY_YEAR',
};

export const getPosts =
    (page = 1) =>
    async (dispatch) => {
        try {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            const res = await getDataApi(`blogs?page=${page}&limit=10`);
            dispatch({
                type: POST_TYPES.GET_POSTS,
                payload: { ...res.data },
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        } catch (error) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: error.response.data.message },
            });
        }
    };

export const getPopularPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: true,
        });
        const res = await getDataApi('popular-posts');
        dispatch({
            type: POST_TYPES.GET_POPULAR_POSTS,
            payload: { ...res.data },
        });
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: false,
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.message },
        });
    }
};

export const getArchivedPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: true,
        });
        const res = await getDataApi('archived');
        dispatch({
            type: POST_TYPES.GET_ARCHIVED_POSTS,
            payload: { ...res.data },
        });
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: false,
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.message },
        });
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: false,
        });
    }
};

export const getArchivedPostsByYear =
    (year, page = 1) =>
    async (dispatch) => {
        try {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            const res = await getDataApi(`archived/${year}?page=${page}`);
            dispatch({
                type: POST_TYPES.GET_ARCHIVED_POSTS_BY_YEAR,
                payload: { ...res.data },
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        } catch (error) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: error.response.data.message },
            });
        }
    };

export const getPost =
    ({ id }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            const result = await getDataApi(`blogs/${id}`);
            dispatch({
                type: POST_TYPES.GET_POST,
                payload: result.data.data,
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        } catch (error) {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: error.response.data.message },
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        }
    };

export const getFeaturesBlog = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: true,
        });
        const result = await getDataApi(`features`);
        dispatch({
            type: POST_TYPES.GET_FEATURES,
            payload: result.data.data,
        });
    } catch (error) {
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: true,
        });
        dispatch({
            type: POST_TYPES.LOADING_POST,
            payload: false,
        });
    }
};

export const getCategoryBlogs =
    ({ id, page = 1 }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            const result = await getDataApi(
                `categories/${id}?page=${page}&limit=${10}`,
            );
            dispatch({
                type: POST_TYPES.GET_CATEGORY_BLOGS,
                payload: result.data.data,
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        } catch (error) {
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: true,
            });
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: error.response.data.message },
            });
            dispatch({
                type: POST_TYPES.LOADING_POST,
                payload: false,
            });
        }
    };
