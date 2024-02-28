

import { getCurrentToken, logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { jwtDecode } from 'jwt-decode';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getCurrentToken);
  const location = useLocation();

  // Check if token exists
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  // Decode the token
  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    // Handle decoding error, maybe token is invalid
    dispatch(logout());
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  // Check token expiration
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  if (decoded.exp && decoded.exp < currentTime) {
    // Token has expired
    dispatch(logout());
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  // Token is valid, continue rendering children
  return children;
};

export default PrivateRoute;
