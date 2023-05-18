import axios from 'axios';

export const getDataApi = async (url) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/${url}`);
    return res;
};
