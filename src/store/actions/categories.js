import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const CATEGORIES_TYPES = {
    GET_CATEGORIES: 'GET_CATEGORIES',
};

export const getCategories = () => async (dispatch) => {
    try {
        const res = await getDataApi('categories');
        dispatch({
            type: CATEGORIES_TYPES.GET_CATEGORIES,
            payload: { ...res.data },
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message },
        });
    }
};
