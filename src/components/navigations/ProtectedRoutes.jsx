import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = Cookies.get('userToken');
  useEffect(() => {
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
      return navigate('/login');
    }
    setIsLoggedIn(true)
  }, [isLoggedIn, userToken, navigate])

  return (
    <>
      {isLoggedIn && <Outlet />}
    </>
  );
};

export default ProtectedRoutes;
