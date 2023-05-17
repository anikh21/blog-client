import { POST_TYPES } from 'store/actions/postAction';
const initState = {
    loading: true,
    items: [],
};

export const featuredReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
            };
        case POST_TYPES.GET_FEATURES:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};
