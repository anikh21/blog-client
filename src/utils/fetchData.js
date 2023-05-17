import axios from 'axios';

export const getDataApi = async (url) => {
    const res = await axios.get(
        `https://dashboard-blog-backend.onrender.com/api/v1/dashboard/${url}`,
    );
    return res;
};
