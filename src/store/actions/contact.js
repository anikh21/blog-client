import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const CONTACT_TYPES = {
    GET_CONTACT: 'GET_CONTACT',
};

export const getContact = () => async (dispatch) => {
    try {
        const res = await getDataApi('contact');
        dispatch({
            type: CONTACT_TYPES.GET_CONTACT,
            payload: { ...res.data },
        });
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message },
        });
    }
};
