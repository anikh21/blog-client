import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const ABOUT_TYPES = {
    GET_ABOUT: 'GET_ABOUT',
};

export const getAbout = () => async (dispatch) => {
    try {
        const res = await getDataApi('about');
        dispatch({
            type: ABOUT_TYPES.GET_ABOUT,
            payload: { ...res.data },
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message },
        });
    }
};
