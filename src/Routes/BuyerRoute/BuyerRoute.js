import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../Pages/Shared/Loading/Loading';


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, isIUserLoading] = useBuyer(user?.email)
    const location = useLocation()
    if (loading || isIUserLoading) {
        return <Loading></Loading>
    }
    if (user && isUser) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default BuyerRoute;