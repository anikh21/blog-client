import { SITE_TYPES } from 'store/actions/siteData';

const initState = {
    siteInfo: {},
};

const siteInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case SITE_TYPES.GET_SITE_INFO:
            return {
                siteInfo: action.payload.data,
            };
        default:
            return state;
    }
};

export default siteInfoReducer;
