import { CONTACT_TYPES } from 'store/actions/contact';

const initState = {
    contact: {},
};

const siteInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case CONTACT_TYPES.GET_CONTACT:
            return {
                contact: { ...action.payload.data },
            };
        default:
            return state;
    }
};

export default siteInfoReducer;
