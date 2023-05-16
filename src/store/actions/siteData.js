import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const SITE_TYPES = {
    GET_SITE_INFO: 'GET_SITE_INFO',
};

export const getSiteInfo = () => async (dispatch) => {
    try {
        const res = await getDataApi('site-data');
        dispatch({
            type: SITE_TYPES.GET_SITE_INFO,
            payload: { ...res.data },
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message },
        });
    }
};
