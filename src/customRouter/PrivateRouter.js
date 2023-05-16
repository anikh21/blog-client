import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
    const firstLogin = true;
    return firstLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
