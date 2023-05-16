import { ABOUT_TYPES } from '@root/actions/about';

const initState = {
    about: {},
};

const siteInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case ABOUT_TYPES.GET_ABOUT:
            return {
                about: { ...action.payload.data },
            };
        default:
            return state;
    }
};

export default siteInfoReducer;
