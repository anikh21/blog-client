import axios from 'axios';

export const getDataApi = async (url) => {
    const res = await axios.get(`/api/v1/dashboard/${url}`);
    return res;
};
