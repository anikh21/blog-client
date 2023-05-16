import { CATEGORIES_TYPES } from '@root/actions/categories';

const initState = {
    categories: [],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case CATEGORIES_TYPES.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data,
            };
        default:
            return state;
    }
};

export default postReducer;
